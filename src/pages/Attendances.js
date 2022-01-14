import React from "react";
import AddAttendance from "../components/AddAttendance";
import AttendanceList from "../components/AttendanceList";
import AttendanceModal from "../components/AttendanceModal";

const Attendances = () => {
  return (
    <main>
      <AddAttendance />
      <AttendanceModal />
      <AttendanceList />
    </main>
  );
};

export default Attendances;
