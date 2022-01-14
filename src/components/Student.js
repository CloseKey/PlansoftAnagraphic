import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Student = ({
  id,
  lastName,
  firstName,
  birthDate,
  birthMuni,
  codeFisc,
  phoneNumb,
  address,
}) => {
  const baseUrl = "https://localhost:44326/api/Students?id=";

  const [isEditing, setIsEditing] = useState(true);
  const [data, setData] = useState({
    id,
    lastName,
    firstName,
    birthDate,
    birthMuni,
    codeFisc,
    phoneNumb,
    address,
  });

  const handleDelete = () => {
    axios
      .delete(`${baseUrl}${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("lo studente frequenta ancora qualche corso");
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(true);
    axios
      .put(`${baseUrl}${id}`, {
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
        alert("student modified");
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
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <ul>
              <li>{birthDate}</li>
            </ul>
            <ul>
              <li>{birthMuni}</li>
            </ul>
            <ul>
              <li>{codeFisc}</li>
            </ul>
            <ul>
              <li>{phoneNumb}</li>
            </ul>
            <ul>
              <li>{address}</li>
            </ul>
          </>
        ) : (
          <>
            <h5>{id}</h5>
            <form className="search-form">
              <div className="form-control">
                <input
                  type="text"
                  id="firstName"
                  value={data.firstName}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  id="lastName"
                  value={data.lastName}
                  onChange={(e) => handleChange(e)}
                />
                <ul>
                  <li>
                    <input
                      type="datetime"
                      id="birthDate"
                      value={data.birthDate}
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      type="text"
                      id="birthMuni"
                      value={data.birthMuni}
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      type="text"
                      id="phoneNumb"
                      value={data.phoneNumb}
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      type="text"
                      id="codeFisc"
                      value={data.codeFisc}
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      type="text"
                      id="address"
                      value={data.address}
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

export default Student;
