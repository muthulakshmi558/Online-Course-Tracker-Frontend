import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import api from '../api/api';

const CourseList = forwardRef(({ instructorId, onEdit }, ref) => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await api.get('courses/', {
      params: instructorId ? { instructor_id: instructorId } : {},
    });
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, [instructorId]);

  useImperativeHandle(ref, () => ({
    refresh: fetchCourses,
  }));

  const deleteCourse = async (id) => {
    await api.delete(`courses/${id}/`);
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2>Course List</h2>
      {courses.map((c) => (
        <div
          key={c.id}
          style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}
        >
          <h3>{c.title}</h3>
          <p>
            <strong>Instructor:</strong> {c.instructor_name}
          </p>
          <p>
            <strong>Description:</strong> {c.description}
          </p>
          <p>
            <strong>Total Lessons:</strong> {c.total_lessons}
          </p>
          <button onClick={() => onEdit(c)}>Edit</button>
          <button onClick={() => deleteCourse(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
});

export default CourseList;
