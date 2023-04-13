import "./App.css";
import "./index.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import Teams from "./components/Teamdetails";
import Players from "./components/Playerdetails";

function App() {
  const [leagues, setLeagues] = useState(null);
  const [teams, setTeams] = useState(null);
  const [players, setPlayers] = useState(null);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const getLeagues = async () => {
      const res = await axios.get(`${BASE_URL}/leagues`);
      setLeagues(res.data);
    };
    getLeagues();
  }, []);

  useEffect(() => {
    const getTeams = async () => {
      const res = await axios.get(`${BASE_URL}/teams`);
      setTeams(res.data);
    };
    getTeams();
  }, []);

  useEffect(() => {
    const getPlayers = async () => {
      const res = await axios.get(`${BASE_URL}/players`);
      setPlayers(res.data);
    };
    getPlayers();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home leagues={leagues} />}
        />
        <Route
          path="/teams"
          element={<Teams teams={teams} />}></Route>
        <Route
          path="/players"
          element={<Players players={players} />}></Route>
      </Routes>
    </div>
  );
}

export default App;

