import React from 'react'
import '../App.css'
import { 
  Navbar
} from '../components';


import { useHistory } from 'react-router-dom'

export default function Home() {


  return(
    <div className="home" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
      <Navbar />
      <div>
        <div className="circle">
          
        </div>
      </div>
    </div>
  )
}