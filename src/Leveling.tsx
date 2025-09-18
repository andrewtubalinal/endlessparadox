import React, { useEffect, useState } from "react";
import "./App.css";

interface Spot {
  level: string;
  monster: string;
  location: string;
}

interface Category {
  type: "main" | "subtitle";
  title: string;
  subtitle?: string;
  spots: Spot[];
}

const LevelingSpots = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/leveling.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const parsedCategories: Category[] = [];

        let currentCategory: Category | null = null;

        for (let line of lines) {
          line = line.trim();
          if (!line || line.startsWith("#")) continue;

          if (line.startsWith("[CATEGORY")) {
            // Save previous category if exists
            if (currentCategory) parsedCategories.push(currentCategory);

            // Parse category header
            // Format: [CATEGORY|type|title|subtitle]
            const parts = line
              .slice(1, -1) // remove brackets
              .split("|")
              .map((p) => p.trim());

            const type = parts[1] === "main" ? "main" : "subtitle";
            const title = parts[2] || "";
            const subtitle = parts[3] || "";

            currentCategory = {
              type,
              title,
              subtitle: subtitle || undefined,
              spots: [],
            };
          } else if (currentCategory) {
            // Parse spot line: level|monster|location
            const parts = line.split("|");
            if (parts.length === 3) {
              currentCategory.spots.push({
                level: parts[0].trim(),
                monster: parts[1].trim(),
                location: parts[2].trim(),
              });
            }
          }
        }
        // Push last category
        if (currentCategory) parsedCategories.push(currentCategory);

        setCategories(parsedCategories);
      })
      .catch((error) => {
        console.error("Error loading leveling.txt:", error);
      });
  }, []);

  const renderSpots = (spots: Spot[]) =>
    spots.map((spot, idx) => (
      <div key={`${spot.level}-${spot.monster}-${idx}`} className="spot-row">
        <span className="spot-level">{spot.level}</span>
        <span className="spot-monster">{spot.monster}</span>
        <span className="spot-location">{spot.location}</span>
      </div>
    ));

  return (
    <section className="section">
      <div className="spots-box">
        {categories.map((category, idx) => {
          if (category.type === "main") {
            return (
              <React.Fragment key={idx}>
                <h2 className="page-title">{category.title}</h2>
                {category.subtitle && <p className="page-description">{category.subtitle}</p>}
                {renderSpots(category.spots)}
              </React.Fragment>
            );
          }

          // subtitle type
          return (
            <div key={idx}>
              <h3 className="section-subtitle">
                {category.title}
                {category.subtitle && (
                  <>
                    <br />
                    <small>({category.subtitle})</small>
                  </>
                )}
              </h3>
              {renderSpots(category.spots)}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LevelingSpots;
