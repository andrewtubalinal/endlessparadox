import "./App.css";

const Budgets = () => {
  return (
    <section className="section">
      <h2 className="page-title">Guild Budgets</h2>
      <p className="page-description">
        Here you can view and manage the guild’s event funds, resources, and contributions.
        (Feature under development)
      </p>

      <div className="budget-box">
        <h3>Current Budget</h3>
        <p className="budget-amount">₱0</p>
      </div>
      
      <div className="budget-box">
        <h3>Upcoming Event Fund</h3>
        <p className="budget-amount">₱0</p>
      </div>
    </section>
  );
};

export default Budgets;
