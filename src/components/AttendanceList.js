import React from "react";
import Attendance from "./Attendance";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const AttendanceList = () => {
  const { attendances, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (attendances.length < 1) {
    return <h2 className="section-title">no attendances</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Attendance</h2>
      <div className="student-center">
        {attendances.map((item) => {
          return <Attendance key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default AttendanceList;
