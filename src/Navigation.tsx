import { Link } from "react-router-dom";
import { Home, BookOpen, Calendar, Calculator, Users } from "lucide-react";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo-container">
          <img src="/assets/logo-transparent.png" alt="Guild Logo" />
        </div>
        <div className="nav-links">
          <Link to="/"><Home size={18}/> Home</Link>
          <Link to="/budgets"><BookOpen size={18}/> Budgets</Link>
          <Link to="/events"><Calendar size={18}/> Events</Link>
          <Link to="/leveling"><Calculator size={18}/> Leveling</Link>
          <Link to="/notice"><BookOpen size={18}/> Notice</Link>
          <Link to="/members"><Users size={18}/> Members</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
