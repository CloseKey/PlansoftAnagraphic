import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = ({ id, dateStart, dateEnd, profName, description }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [data, setData] = useState({
    id,
    dateStart,
    dateEnd,
    profName,
    description,
  });

  const baseUrl = "https://localhost:44326/api/Courses?id=";
  const handleDelete = () => {
    axios
      .delete(`${baseUrl}${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("il corso è ancora seguito da qualche studente");
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(true);
    axios
      .put(`${baseUrl}${id}`, {
        id: data.id,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        profName: data.profName,
        description: data.description,
      })
      .then((res) => {
        console.log(res.data);
        alert("course modified");
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
    <article className="student">
      <div className="student-footer">
        {isEditing ? (
          <>
            <h5>{id}</h5>
            <h3>{description}</h3>
            <h4>{profName}</h4>
            <ul>
              <li>{dateStart}</li>
            </ul>
            <ul>
              <li>{dateEnd}</li>
            </ul>
          </>
        ) : (
          <>
            <h5>{id}</h5>
            <form className="search-form">
              <div className="form-control">
                <input
                  type="text"
                  id="description"
                  value={data.description}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  id="profName"
                  value={data.profName}
                  onChange={(e) => handleChange(e)}
                />
                <ul>
                  <li>
                    <input
                      type="datetime"
                      id="dateStart"
                      value={data.dateStart}
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      type="dateTime"
                      id="dateEnd"
                      value={data.dateEnd}
                      onChange={(e) => handleChange(e)}
                    />
                  </li>
                </ul>
              </div>
            </form>
          </>
        )}
        <br />
        {isEditing ? (
          <>
            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(!isEditing)}
            >
              Modifica
            </button>
            <button className="btb btn-primary" onClick={handleDelete}>
              Elimina
            </button>
          </>
        ) : (
          <>
            <button className="btn" onClick={handleUpdate}>
              conferma
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default Course;
