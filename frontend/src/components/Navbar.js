import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa"; // Import icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">CRICSTARS</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/live-scores" className="nav-link">Live Scores</Link></li>
        <li><Link to="/stats" className="nav-link">Stats</Link></li>
        <li><Link to="/schedule" className="nav-link">Scheduled Matches</Link></li>
        <li><Link to="/rankings" className="nav-link">ICC Rankings</Link></li>
        <li><Link to="/IPL" className="nav-link">IPL</Link></li>
      </ul>
      <div className="icons">
        <FaFilter className="icon" />
        <FaSearch className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
