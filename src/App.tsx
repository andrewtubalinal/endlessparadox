import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Photos from "./Photos";
import Events from "./Events";
import Leveling from "./Leveling";
import Members from "./Members";
import Notice from "./Notice";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="subwrapper">
          <Navigation />
          {/* Pages go here */}
          <Routes>
            {/* Example route placeholders */}
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
