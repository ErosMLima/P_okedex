import React from "react";
import { Link } from "react-router-dom";

// import "./styles.css";

function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link to="pokedex">
        <button className="button">
          <span>
            <p>P_OKEDEX</p>
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Home;
