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
}

export default App;
