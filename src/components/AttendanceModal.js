import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const AttendanceModal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const url = "https://localhost:44326/api/Attendances";
  const [data, setData] = useState({
    id: 0,
    studentId: "",
    courseId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        id: data.id,
        studentId: data.studentId,
        courseId: data.courseId,
      })
      .then((res) => {
        console.log(res.data);
        alert("attendance added");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <div>
          <div className="student-footer">
            <section className="section search">
              <form className="search-form" onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button className="btn btn-primary" onClick={closeModal}>
                    Aggiungi Frequenza
                  </button>
                </div>
                <div className="form-control">
                  Id Studente
                  <input
                    value={data.studentId}
                    type="number"
                    id="studentId"
                    onChange={(e) => handleChange(e)}
                  />
                  Id Corso
                  <input
                    value={data.courseId}
                    type="number"
                    id="courseId"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </form>
            </section>
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes></FaTimes>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;
