import { useState } from "react";
import "./App.css";

const Photos = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [highlightedImage, setHighlightedImage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentFolderPath, setCurrentFolderPath] = useState<{ year: string; folder: string } | null>(null);

  // 👇 Fetch image filenames from serverless function
  const handleFolderClick = async (year: string, folder: string) => {
    try {
      const res = await fetch(`/api/images?year=${year}&folder=${folder}`);
      const data = await res.json();
      setSelectedImages(data);
      setCurrentFolderPath({ year, folder });
      setHighlightedImage(null);
      setShowPopup(true);
    } catch (err) {
      console.error("Failed to load images", err);
    }
  };
  
  const imagePath = (filename: string) => {
    if (!currentFolderPath) return "";
    const { year, folder } = currentFolderPath;
    return `/assets/guild-img/${year}/${folder}/${filename}`;
  };

  return (
    <section className="section">
      <h2 className="page-title">Guild Photos</h2>
      <p className="page-description">
        Here you can view and manage the guild’s event funds, resources, and contributions.
      </p>

      <div className="photos-section">
        {["2025"].map((year) => (
          <div key={year}>
            <h3>{year}</h3>
            <ul>
              {["september-7", "september-9", "september-14", "september-21", "september-28", "october-5"].map((folder) => (
                <li key={folder}>
                  <button onClick={() => handleFolderClick(year, folder)}>{folder}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Images</h3>
            <div className="image-grid">
              {selectedImages.map((img, index) => (
                <img
                  key={index}
                  src={imagePath(img)}
                  alt={`Guild ${index}`}
                  className={highlightedImage === img ? "highlighted" : ""}
                  onClick={() => setHighlightedImage(img)}
                />
              ))}
            </div>
            
            {highlightedImage && (
              <div className="highlighted-preview">
                <h4>Highlighted</h4>
                <img src={imagePath(highlightedImage)} alt="Highlighted" />
              </div>
            )}
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;