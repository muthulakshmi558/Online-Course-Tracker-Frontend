import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import InstructorList from "./components/InstructorList";
import InstructorForm from "./components/InstructorForm";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/courses"
            element={
              <div>
                <h1>Course Management</h1>
                <CourseForm />
                <CourseList />
              </div>
            }
          />
          <Route
            path="/instructors"
            element={
              <div>
                <h1>Instructor Management</h1>
                <InstructorForm />
                <InstructorList />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
