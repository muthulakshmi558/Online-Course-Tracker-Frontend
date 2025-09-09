import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function InstructorList() {
  const [instructors, setInstructors] = useState([]);

  const fetchInstructors = async () => {
    try {
      const res = await api.get("instructors/");
      setInstructors(res.data);
    } catch (err) {
      console.error("Error fetching instructors:", err);
    }
  };

  // ✅ Add polling here
  useEffect(() => {
    // Initial fetch
    fetchInstructors();

    // Polling every 5 seconds
    const interval = setInterval(fetchInstructors, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Instructors</h2>
      {instructors.map((i) => (
        <div key={i.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{i.name}</h3>
          <p>{i.email}</p>
        </div>
      ))}
    </div>
  );
}
