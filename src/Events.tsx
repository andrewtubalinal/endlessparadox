import React, { useEffect, useState } from "react";
import "./App.css";

interface Event {
  title: string;
  date: string;
  past: boolean;
}

const parseEvents = (text: string): Event[] => {
  return text
    .trim()
    .split("\n")
    .map((line) => {
      const [title, date, past] = line.split("|");
      return {
        title: title.trim(),
        date: date.trim(),
        past: past.trim().toLowerCase() === "true",
      };
    });
};

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/events.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseEvents(text);
        setEvents(parsed);
      })
      .catch((err) => {
        console.error("Failed to load events.txt", err);
      });
  }, []);

  return (
    <section className="section">
      <h2 className="page-title">Guild Events</h2>
      <p className="page-description">
        Here you can find upcoming and past guild events. Join us in fun
        activities, boss hunts, and community gatherings!
      </p>

      {events.length === 0 && (
        <div className="event-box">
          <h3>No upcoming events.</h3>
          <p>Check back later for more exciting guild activities!</p>
        </div>
      )}

      {events.map((event, index) => (
        <div className={`event-box ${event.past ? "past" : ""}`} key={index}>
          <h3>{event.title}</h3>
          <p>Held on {new Date(event.date).toLocaleDateString()}</p>
        </div>
      ))}
    </section>
  );
};

export default Events;
