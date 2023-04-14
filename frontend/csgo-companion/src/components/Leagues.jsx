import React from "react";

const Leagues = ({ leagues }) => {
  return (
    <div>
      <h2>Leagues</h2>
      {leagues.map((league, index) => (
        <div key={index}>
          {/* Render league information */}
          <h3>{league.name}</h3>
          {/* Add other league information here */}
        </div>
      ))}
    </div>
  );
};

export default Leagues;



