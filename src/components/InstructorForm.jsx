import React, { useState } from "react";
import api from "../api/api";

export default function InstructorForm({ onInstructorAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("instructors/", { name, email });
      setName("");
      setEmail("");
      if (onInstructorAdded) onInstructorAdded();
    } catch (err) {
      console.error("Error creating instructor:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Instructor Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Instructor Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Instructor</button>
    </form>
  );
}
