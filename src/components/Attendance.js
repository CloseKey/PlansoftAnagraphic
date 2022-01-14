import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Attendance = ({ id, courseId, studentId }) => {
  const baseUrl = "https://localhost:44326/api/Attendances?id=";
  const handleDelete = () => {
    axios
      .delete(`${baseUrl}${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <article className="student">
      <div className="student-footer">
        <h5>{id}</h5>
        <ul>
          <li>{courseId}</li>
        </ul>
        <ul>
          <li>{studentId}</li>
        </ul>
        <br />
        <button className="btb btn-primary" onClick={handleDelete}>
          Elimina
        </button>
      </div>
    </article>
  );
};

export default Attendance;
