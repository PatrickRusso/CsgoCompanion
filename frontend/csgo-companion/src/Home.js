import './App.css';
import React from "react";
import Leagues from "./components/Leagues";
import Nav from "./components/Nav";

const Home = ({leagues}) => {
  console.log(leagues);
  return (
    <div className="home-container">
      <h1>CSGO Manager</h1>
      <Nav />
      {/* Render the Leagues component and pass the leagues data */}
      <Leagues leagues={leagues} />
      {/* Add other content for the Home component */}
    </div>
  );
};

export default Home;



