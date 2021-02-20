import React from 'react'
import '../App.css'
import { 
  LoginModal,
  Navbar,
  RegisterModal 
} from '../components';
import { useState, useEffect } from 'react'
import ZoomableBubbleChart from '../components/ZoomableBubbleChart'
import "../../node_modules/react-bubble-chart/src/style.css";
import genres from '../Assets/JSON/chartData.json'

import { useHistory } from 'react-router-dom'

export default function Home() {
  const [genresData, setGenresData] = useState([])

  useEffect(() => {
    setGenresData(genres)
  }, [])
  console.log(genresData)

  return(
    <div className="home" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
      <Navbar />
      <div>
        <div className="circle">
          <ZoomableBubbleChart data={genresData} />
        </div>
      </div>
    </div>
  )
}