import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left Section - Brand */}
        <div style={styles.brand}>
          <h2 style={styles.logo}>CricStars</h2>
          <p>Stay updated with the latest cricket news, scores, and stats.</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div style={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/live-scores" style={styles.link}>Live Scores</Link></li>
            <li><Link to="/schedule" style={styles.link}>Schedule</Link></li>
            <li><Link to="/player-stats" style={styles.link}>Player Stats</Link></li>
            <li><Link to="/team-stats" style={styles.link}>Team Stats</Link></li>
            <li><Link to="/news" style={styles.link}>News</Link></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div style={styles.social}>
          <h3>Follow Us</h3>
          <div style={styles.icons}>
            <a href="https://facebook.com" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} CricStars. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Footer Styles
const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  brand: {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FFD700",
  },
  links: {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  },
  social: {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  },
  link: {
    display: "block",
    color: "#FFD700",
    textDecoration: "none",
    margin: "5px 0",
  },
  icons: {
    display: "flex",
    gap: "15px",
  },
  iconLink: {
    color: "#FFD700",
    fontSize: "20px",
    textDecoration: "none",
  },
  bottomBar: {
    marginTop: "20px",
    borderTop: "1px solid #444",
    paddingTop: "10px",
  },
};

export default Footer;
 
