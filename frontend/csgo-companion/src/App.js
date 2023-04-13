import './App.css';
import './index.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';


function App() {

  const [ leagues, setLeagues ] = useState(null)
  const [ teams, setTeams ] = useState(null)
  const [ players, setPlayers ] = useState(null)

  const BASE_URL = "http://localhost:8000"

  useEffect(()=>{
    const getLeagues = async () => {
      const res = await axios.get(`${BASE_URL}/leagues`)
      setLeagues(res.data)
    }
    getLeagues()
  }, [])

  useEffect (()=>{
    const getTeams = async () => {
      const res = await axios.get(`${BASE_URL}/teams`)
      setTeams(res.data)
    }
    getTeams()
  }, [])

  useEffect(()=> {
    const getPlayers = async () => {
      const res = await axios.get(`${BASE_URL}/players`)
      setPlayers(res.data)
    }
    setPlayers()
  })



  return (
    <div>
    <h1 className="text-red-500">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
