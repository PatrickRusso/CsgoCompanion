import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerDetail from "./Playerdetail";

const Teamdetails = (props) => {
  const [players, setPlayers] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    let selectedPlayers = props.players[id];
    setPlayers(selectedPlayers);
  }, []);

  return players && props.players && props.teams ? (
    <div>
      {props.players.map((player) =>
        render(player, id)
        // <h1>{player.name}</h1>
      )}
    </div>
  ) : (
    <h1>loading ...</h1>
  );
};

function render(player, id) {
  if (player.team == "http://localhost:8000/teams/" + id + "/") {
    console.log(player.photo)
    let props = {
      photo: player.photo,
      name: player.name
    }
    return <PlayerDetail {...props}  />

  }
}

class playerDetail {
  constructor(player) {
    this.name = player.name;
    this.photo = player.photo;
    this.nationality = player.nationality;
  }
}

export default Teamdetails;
