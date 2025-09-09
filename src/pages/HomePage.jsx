import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center",
      background: "#F5F5F5"
    }}>
      <h1 style={{ fontSize: "40px", color: "#4B69A9", marginBottom: "20px" }}>
        Welcome to Online Course Tracker
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Manage your <strong>Courses</strong> and <strong>Instructors</strong> easily.
      </p>
      <div>
        <Link to="/courses">
          <button style={{
            background: "#4B69A9",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            marginRight: "15px",
            cursor: "pointer"
          }}>Go to Courses</button>
        </Link>
        <Link to="/instructors">
          <button style={{
            background: "#000",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>Go to Instructors</button>
        </Link>
      </div>
    </div>
  );
}
