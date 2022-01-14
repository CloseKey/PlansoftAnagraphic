import React from "react";
import Course from "./Course";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CourseList = () => {
  const { courses, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (courses.length < 1) {
    return <h2 className="section-title">no courses</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Courses</h2>
      <div className="student-center">
        {courses.map((item) => {
          return <Course key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CourseList;
