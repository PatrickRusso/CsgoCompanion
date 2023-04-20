import React from "react";

const Teamdetails = (props) => {
  // Access the props and use them in your component
  // console.log(leagues);
  // console.log(teams);
  // console.log(players);

  // Render the component
  return (
    <div>
    {props.players.map((player) => (
      // if (player.team == )
      <h1>{player.name}</h1>
    ))}
    </div>
  );
};

export default Teamdetails;







