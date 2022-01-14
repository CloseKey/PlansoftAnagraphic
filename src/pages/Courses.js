import React from "react";
import CourseList from "../components/CourseList";
import AddCourse from "../components/AddCourse";
import CourseModal from "../components/CourseModal";

const Courses = () => {
  return (
    <main>
      <AddCourse />
      <CourseModal />
      <CourseList />
    </main>
  );
};

export default Courses;
