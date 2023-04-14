import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Teams from "./components/TeamPage";
import Players from "./components/Playerdetails";
import Leagues from "./components/Leagues";
import Teamdetails from "./components/Teamdetails";
import Playerdetails from "./components/Playerdetails";
import './App.css';



function App() {
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  const BASE_URL = "http://localhost:8000";

  useEffect(()=>{
    const getLeagues = async () => {
      const res = await axios.get(`${BASE_URL}/leagues/`)
      // console.log(res.data)
      setLeagues(res.data)
    }
    getLeagues()
  }, [])
  

  useEffect(() => {
    const getTeams = async () => {
      const res = await axios.get(`${BASE_URL}/teams/`);
      // console.log(res.data)
      setTeams(res.data);
    };
    getTeams();
  }, [teams]);

  useEffect(() => {
    const getPlayers = async () => {
      const res = await axios.get(`${BASE_URL}/players/`);
      setPlayers(res.data);
    };
    getPlayers();
  }, []);
  // console.log(teams)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home leagues={leagues} teams={teams} players={players} />} />
        <Route path="/teams/" element={<Teams leagues={leagues} teams={teams} players={players} />}></Route>
        <Route path="/players/" element={<Players leagues={leagues} teams={teams} players={players} />}></Route>
        <Route path="/leagues/" element={<Leagues leagues={leagues} teams={teams} players={players} />}></Route>
        <Route path="/teams/:id" element={<Teamdetails leagues={leagues} teams={teams} players={players} />}></Route>
        <Route path="/players/:id" element={<Playerdetails leagues={leagues} teams={teams} players={players} />}></Route>
      </Routes>
    </div>
  );
}

export default App;


