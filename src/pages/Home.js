import React from 'react'
import '../App.css'
import { 
  Navbar,
  BubbleChartParent
} from '../components';
import "../../node_modules/react-bubble-chart/src/style.css";
import genres from '../Assets/JSON/chartData.json'
import { useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

export default function Home() {
  const { user, userSpotify } = useSelector(state => state.userReducer)
  console.log(user, 'dari home');
  return(
    <div className="home" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
      <Navbar />
      <div>
        <div className="" >
          <BubbleChartParent data={genres}/>
        </div>
        <p style={{ color: 'white' }}>{JSON.stringify(user)}</p>
      </div>
    </div>
  )
}