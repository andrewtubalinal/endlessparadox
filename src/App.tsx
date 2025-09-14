import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Budgets from "./Budgets";
import Events from "./Events";
import Leveling from "./Leveling";
import Members from "./Members";

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
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/events" element={<Events />} />
            <Route path="/leveling" element={<Leveling />} />
            <Route path="/updates" element={<h2>Updates</h2>} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
