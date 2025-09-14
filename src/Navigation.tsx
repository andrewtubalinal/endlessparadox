import { Link } from "react-router-dom";
import { Home, Image, Calendar, Calculator, Users, Megaphone } from "lucide-react";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo-container">
          <img src="logo-transparent.png" alt="Halcyon Concord Guild Logo" />
        </div>
        <div className="nav-links">
          <Link to="/"><Home size={18}/> Home</Link>
          <Link to="/photos"><Image size={18}/> Photos</Link>
          <Link to="/events"><Calendar size={18}/> Events</Link>
          <Link to="/leveling"><Calculator size={18}/> Leveling</Link>
          <Link to="/notice"><Megaphone size={18}/> Notice</Link>
          <Link to="/members"><Users size={18}/> Members</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
