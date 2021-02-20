import React, { useState, useEffect } from 'react'
import '../App.css'
import { 
  LoginModal,
  Navbar,
  RegisterModal 
} from '../components';
import ZoomableBubbleChart from '../components/ZoomableBubbleChart'
import "../../node_modules/react-bubble-chart/src/style.css";
import genres from '../Assets/JSON/chartData.json'

import { useHistory } from 'react-router-dom'

export default function Home() {

  return(
    <div className="home" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
      <Navbar />
      <div>
        <div className="circle">
          <ZoomableBubbleChart data={genres} />
        </div>
      </div>
    </div>
  )
}