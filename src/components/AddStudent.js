import React from "react";
import { useGlobalContext } from "../context";

const AddStudent = () => {
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
          Aggiungi Studente
        </button>
      </div>
    </section>
  );
};

export default AddStudent;
