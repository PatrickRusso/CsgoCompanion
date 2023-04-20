import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Teams(props) {
  return props.teams ? (
    <div>
      <Nav />
      <h1 className="header">ESL Pro League</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {props.teams.map((team) => (
          <Link to={`/teams/${team.name}`} key={team.name}>
            <div
              style={{
                width: "300px",
                height: "300px",
                margin: "10px",
                padding: "10px",
                borderRadius: "5px",
                background: `url(${team.logo}) no-repeat center center`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                color: "#fff",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <h2>{team.name}</h2>
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                }}
              >
                <h3>{team.record}</h3>
                <p>{team.region}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <h2>Loading . . .</h2>
  );
}

export default Teams;













