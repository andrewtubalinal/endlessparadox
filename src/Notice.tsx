import "./App.css";

const Notice = () => {
  return (
    <section className="section">
      <h2 className="page-title">Guild Notice</h2>
      <p className="page-description">
        This is the guild’s official notice. Only the Guild Leader can update it.
      </p>

      <div className="notice-box">
        <h3>Current Notice</h3>
        <p className="notice-text">
          Welcome to Endless Paradox!  
          Stay friendly, respect each other, and enjoy the journey.  
          Remember: no drama, no toxicity — just pure fun! ✨
        </p>
      </div>
    </section>
  );
};

export default Notice;
