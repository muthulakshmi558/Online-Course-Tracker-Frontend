import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#4B69A9",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ color: "#fff", margin: 0 }}>Online Course Tracker</h2>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>Home</Link>
        <Link to="/courses" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>Courses</Link>
        <Link to="/instructors" style={{ color: "#fff", textDecoration: "none" }}>Instructors</Link>
      </div>
    </nav>
  );
}
