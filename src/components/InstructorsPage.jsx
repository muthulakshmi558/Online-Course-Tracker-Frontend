import { useState, useEffect } from "react";
import axios from "axios";

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch instructors from Django API
    axios
      .get("http://127.0.0.1:8000/api/instructors/")
      .then((res) => setInstructors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Instructors</h1>
      <ul>
        {instructors.map((inst) => (
          <li key={inst.id}>
            {inst.name} - {inst.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
