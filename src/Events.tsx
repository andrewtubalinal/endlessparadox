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
        <h3>Upcoming: Boss Hunt Marathon</h3>
        <p>
          Date: September 30, 2025 <br />
          Gather with guildmates for an all-day boss hunt event! Drops, EXP,
          and fun guaranteed.
        </p>
      </div>

      <div className="event-box">
        <h3>Upcoming: Guild Party</h3>
        <p>
          Date: October 15, 2025 <br />
          Celebrate the guild’s achievements with games, trivia, and prizes.
        </p>
      </div>

      {/* Past Events */}
      <div className="event-box past">
        <h3>Past: Anniversary Celebration</h3>
        <p>
          Held on August 20, 2025 — A special event celebrating Endless Paradox
          with fireworks, contests, and fun memories.
        </p>
      </div>
    </section>
  );
}

export default Events;
