function Events() {
  return (
    <section className="section">
      <h2 className="page-title">Guild Events</h2>
      <p className="page-description">
        Here you can find upcoming and past guild events. Join us in fun
        activities, boss hunts, and community gatherings!
      </p>

      {/* Upcoming Events */}

      <div className="event-box">
        <h3>No upcoming events.</h3>
        <p>
          Check back later for more exciting guild activities!
        </p>
      </div>

      {/* Past Events */}

      <div className="event-box past">
        <h3>Guild Raid - Wind Element</h3>
        <p>
          Held on September 14, 2025.
        </p>
      </div>
      
      <div className="event-box past">
        <h3>Guild Pictorial - Night Saltau Beach</h3>
        <p>
          Held on September 09, 2025.
        </p>
      </div>

      <div className="event-box past">
        <h3>Guild Raid - Fire Element</h3>
        <p>
          Held on September 07, 2025.
        </p>
      </div>
    </section>
  );
}

export default Events;
