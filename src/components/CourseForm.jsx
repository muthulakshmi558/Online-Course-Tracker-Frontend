import React, { useEffect, useState } from 'react';
import api from '../api/api';

export default function CourseForm({ course, onCourseSaved, onCancel }) {
  const [formData, setFormData] = useState({ title: '', description: '', instructor: '' });
  const [instructors, setInstructors] = useState([]);

  // Load instructors for dropdown
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await api.get('instructors/');
        setInstructors(res.data);
      } catch (err) {
        console.error('Failed to fetch instructors:', err);
      }
    };
    fetchInstructors();
  }, []);

  // Prefill if editing
  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title,
        description: course.description,
        instructor: course.instructor, // already ID
      });
    } else {
      setFormData({ title: '', description: '', instructor: '' });
    }
  }, [course]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (course) {
        await api.put(`courses/${course.id}/`, formData); // update
      } else {
        await api.post('courses/', formData); // create
      }
      onCourseSaved(); // refresh list in parent
    } catch (err) {
      console.error('Save failed:', err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>{course ? 'Edit Course' : 'Add New Course'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
<input
  type="number"
  placeholder="Total Lessons"
  value={formData.total_lessons || ''}
  onChange={(e) => setFormData({ ...formData, total_lessons: parseInt(e.target.value) })}
  required
/>
        {/* Instructor Dropdown */}
        <select
          value={formData.instructor}
          onChange={(e) => setFormData({ ...formData, instructor: parseInt(e.target.value) })}
          required
        >
          <option value="">-- Select Instructor --</option>
          {instructors.map((ins) => (
            <option key={ins.id} value={ins.id}>
              {ins.name} ({ins.email})
            </option>
          ))}
        </select>

        <button type="submit">{course ? 'Update' : 'Create'}</button>
        {course && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
