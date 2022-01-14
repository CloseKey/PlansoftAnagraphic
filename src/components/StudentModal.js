import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const StudentModal = ({}) => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const url = "https://localhost:44326/api/Students";
  const [data, setData] = useState({
    id: 0,
    lastName: "",
    firstName: "",
    birthDate: "",
    birthMuni: "",
    codeFisc: "",
    phoneNumb: "",
    address: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        id: data.id,
        lastName: data.lastName,
        firstName: data.firstName,
        birthDate: data.birthDate,
        birthMuni: data.birthMuni,
        codeFisc: data.codeFisc,
        phoneNumb: data.phoneNumb,
        address: data.address,
      })
      .then((res) => {
        console.log(res.data);
        alert("student added");
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
                    Aggiungi Studente
                  </button>
                </div>
                <div className="form-control">
                  Nome
                  <input
                    value={data.firstName}
                    type="text"
                    id="firstName"
                    onChange={(e) => handleChange(e)}
                  />
                  Cognome
                  <input
                    value={data.lastName}
                    type="text"
                    id="lastName"
                    onChange={(e) => handleChange(e)}
                  />
                  Data di nascita
                  <input
                    value={data.birthDate}
                    type="datetime"
                    id="birthDate"
                    onChange={(e) => handleChange(e)}
                  />
                  Luogo di nascita
                  <input
                    value={data.birthMuni}
                    type="text"
                    id="birthMuni"
                    onChange={(e) => handleChange(e)}
                  />
                  Codice Fiscale
                  <input
                    value={data.codeFisc}
                    type="text"
                    id="codeFisc"
                    onChange={(e) => handleChange(e)}
                  />
                  Numero di telefono
                  <input
                    value={data.phoneNumb}
                    type="text"
                    id="phoneNumb"
                    onChange={(e) => handleChange(e)}
                  />
                  Indirizzo
                  <input
                    value={data.address}
                    type="text"
                    id="address"
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

export default StudentModal;
