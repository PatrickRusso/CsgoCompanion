import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
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


  return (
    <div className="App">
      <h1>Finally!</h1>
      <Nav />
    </div>
  );
}

export default App;
