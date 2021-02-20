<<<<<<< HEAD
import React from 'react'
import { useState, useEffect } from 'react'
import ZoomableBubbleChart from './components/ZoomableBubbleChart'
import "../node_modules/react-bubble-chart/src/style.css";
import genres from './Assets/JSON/chartData.json'

function App() {
  const [genresData, setGenresData] = useState([])

  useEffect(() => {
    setGenresData(genres)
  }, [])
  
  if (genresData.length > 0) {
      return (
    <div className="App">
      <h1>WorldSounds</h1>
      <ZoomableBubbleChart data={genresData} />
    </div>
  )
  } else {
    return (
      <h1>loading</h1>
    )
  }
=======
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  ArtistList,
  Home,
  LandingPage
} from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/artists" >
            <ArtistList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
>>>>>>> 4314143ca58003d17271b04cb2f1020ce1e582b5
}

export default App;
