import React from "react";
import Student from "./Student";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const StudentList = () => {
  const { students, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (students.length < 1) {
    return <h2 className="section-title">no students</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Students</h2>
      <div className="student-center">
        {students.map((item) => {
          return <Student key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default StudentList;
