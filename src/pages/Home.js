import React, { useEffect, useState } from 'react'
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
  const [parentGenre, setParentGenre] = useState([])

  useEffect(() => {
    genres.map(family => {
      family.children.map(child => child._id = '')
    })
  }, [genres])

  return(
    <div className="home">
      <Navbar />
      <div>
        <div className="" >
          <BubbleChartParent data={genres}/>
        </div>
        {/* <p style={{ color: 'white' }}>{JSON.stringify(user)}</p> */}
      </div>
    </div>
  )
}