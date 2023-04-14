import React from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Teams(props) {
  console.log()
  const navigate = useNavigate();

  const showTeam = (id) => {
    navigate(`/teams/${id}`);
  };

  return props.teams ? (
    <div>
      <Nav />
      <h1>This is Teams</h1>
      {props.teams.map((team) => (
        <div>
          {/* Render team information */}
          <h1>{team.name}</h1>
          <img src={team.logo} />
        </div>
      ))}
    </div>
  ) : (
    <h2>Loading . . .</h2>
  );
}

export default Teams;




