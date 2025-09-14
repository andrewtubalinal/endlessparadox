import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Photos from "./Photos";
import Events from "./Events";
import { events } from "./eventData"; 
import Leveling from "./Leveling";
import Members from "./Members";
import Notice from "./Notice";
import Popup from "./Popup";
import { useEffect, useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [eventToShow, setEventToShow] = useState<{ title: string; date: string } | null>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem("popup-last-shown");

    if (lastShown !== today) {
      const latestEvent = events.length > 0 ? events[0] : null;

      if (latestEvent) {
        setEventToShow(latestEvent);
        setShowPopup(true);
        localStorage.setItem("popup-last-shown", today);
      }
    }
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <Router>
      <div className="wrapper">
        <div className="subwrapper">
          <Navigation />
          {showPopup && eventToShow && (
            <Popup title={eventToShow.title} date={eventToShow.date} onClose={closePopup} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/events" element={<Events />} />
            <Route path="/leveling" element={<Leveling />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
