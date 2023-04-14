import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Playerdetails(props) {
  return props.players ? (
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
        {props.players.map((player) => (
          <div
            key={player.id}
            style={{
              width: "300px",
              height: "400px",
              margin: "10px",
              padding: "10px",
              borderRadius: "5px",
              color: "#000",
              position: "relative",
              cursor: "pointer",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid #000",
            }}
            onClick={() => {
              console.log("Player ID:", player.id);
            }}
          >
            <img
              src={player.photo}
              alt={player.name}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <h2 style={{ marginTop: "1rem" }}>{player.name}</h2>
            <p>{player.team.name}</p> {/* Display team name */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
              }}
            >
              {/* Display other player details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h2>Loading . . .</h2>
  );
}

export default Playerdetails;




