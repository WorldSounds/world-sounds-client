import React, { useEffect, useState } from 'react'
import '../App.css'
import { 
  Navbar,
  BubbleChartParent
} from '../components';
import "../../node_modules/react-bubble-chart/src/style.css";
import genres from '../Assets/JSON/chartData.json'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'


export default function Home() {
  const { access_token, refresh_token} = useParams()
  // console.log(useParams(), 'ini params');
  // const [parentGenre, setParentGenre] = useState([])

  // useEffect(() => {
  //   genres.map(family => {
  //     family.children.map(child => child._id = '')
  //   })
  // }, [genres])

  console.log(access_token, 'di home');
  useEffect(() => {
    if (access_token) {
      localStorage.setItem('access_token', access_token)
    }
  }, [localStorage.access_token])

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