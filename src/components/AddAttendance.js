import React from "react";
import { useGlobalContext } from "../context";

const AddAttendance = () => {
  const { openModal } = useGlobalContext();

  return (
    <section className="section">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn btn-primary" onClick={openModal}>
          Aggiungi Frequenza
        </button>
      </div>
    </section>
  );
};

export default AddAttendance;
