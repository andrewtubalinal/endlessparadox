import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Image, Calendar, Calculator, Users, Megaphone, Menu } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo-container">
          <img src="logo-transparent.png" alt="Halcyon Concord Guild Logo" />
        </div>

        {/* Hamburger button visible on mobile */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}><Home size={18} /> Home</Link>
          <Link to="/photos" onClick={() => setIsOpen(false)}><Image size={18} /> Photos</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}><Calendar size={18} /> Events</Link>
          <Link to="/leveling" onClick={() => setIsOpen(false)}><Calculator size={18} /> Leveling</Link>
          <Link to="/notice" onClick={() => setIsOpen(false)}><Megaphone size={18} /> Notice</Link>
          <Link to="/members" onClick={() => setIsOpen(false)}><Users size={18} /> Members</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
