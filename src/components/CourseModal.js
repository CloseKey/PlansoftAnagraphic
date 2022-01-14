import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const CourseModal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const url = "https://localhost:44326/api/Courses";
  const [data, setData] = useState({
    id: 0,
    dateStart: "",
    dateEnd: "",
    description: "",
    profName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        id: data.id,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        description: data.description,
        profName: data.profName,
      })
      .then((res) => {
        console.log(res.data);
        alert("coruse added");
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
                    Aggiungi Corso
                  </button>
                </div>
                <div className="form-control">
                  Descrizione
                  <input
                    value={data.description}
                    type="text"
                    id="description"
                    onChange={(e) => handleChange(e)}
                  />
                  Nome del professore
                  <input
                    value={data.profName}
                    type="text"
                    id="profName"
                    onChange={(e) => handleChange(e)}
                  />
                  Data di inizio
                  <input
                    value={data.dateStart}
                    type="datetime"
                    id="dateStart"
                    onChange={(e) => handleChange(e)}
                  />
                  Data di fine
                  <input
                    value={data.dateEnd}
                    type="datetime"
                    id="dateEnd"
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

export default CourseModal;
