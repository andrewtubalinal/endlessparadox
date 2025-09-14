import { events } from "./eventData"; // ✅ use shared data

function Events() {
  return (
    <section className="section">
      <h2 className="page-title">Guild Events</h2>
      <p className="page-description">
        Here you can find upcoming and past guild events. Join us in fun
        activities, boss hunts, and community gatherings!
      </p>

      {/* Optional: Show message if no events */}
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
}

export default Events;
