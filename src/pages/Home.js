import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Link to="/students">
            <button className="btn btn-primary">Vai a studenti</button>
          </Link>
          <Link to="/courses">
            <button className="btn btn-primary">Vai ai corsi</button>
          </Link>
          <Link to="/attendances">
            <button className="btn btn-primary">Vai alle frequenze</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
