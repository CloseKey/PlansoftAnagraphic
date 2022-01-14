import React from "react";
import StudentList from "../components/StudentList";
import AddStudent from "../components/AddStudent";
import StudentModal from "../components/StudentModal";

const Students = () => {
  return (
    <main>
      <AddStudent />
      <StudentModal />
      <StudentList />
    </main>
  );
};

export default Students;
