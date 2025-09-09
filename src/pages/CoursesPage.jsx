import React, { useRef, useState } from 'react';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';

export default function CoursesPage() {
  const listRef = useRef();
  const [editingCourse, setEditingCourse] = useState(null); // for edit mode

  return (
    <div>
      <h1>Course Management</h1>

      {/* Course Form */}
      <CourseForm
        course={editingCourse}  // pass selected course
        onCourseSaved={() => {
          listRef.current?.refresh(); // refresh list after save
          setEditingCourse(null); // reset edit mode
        }}
        onCancel={() => setEditingCourse(null)}
      />

      {/* Course List */}
      <CourseList
        ref={listRef}
        onEdit={(course) => setEditingCourse(course)} // when clicking edit
      />
    </div>
  );
}
