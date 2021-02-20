import React, { useRef, useEffect } from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function LandingPage() {


  return(
    <div className="landing" >
      <div className="welcome">
        <h1  data-aos="fade-up" data-aos-duration="3000" style={{ fontWeight: 'bold', color: 'rgba(69, 182, 144, 1)' }} >Welcome to WorldSounds</h1>
        <h3 data-aos="fade-up" data-aos-duration="3000" style={{ color: 'white' }} > where you can found unexpected music</h3>
      </div>
      <div id="bg">
        <img  src="concert.jpg" alt="concert"  data-aos="fade-up" data-aos-duration="1000"/>
      </div>
      <div className="content"  data-aos="zoom-in"  data-aos-duration="1000" style={{ backgroundColor: 'rgba(14, 18, 66, 1)', padding: '20px', height: '500px' }}>
        <div>
            <img src="https://o.remove.bg/downloads/18abc88c-e087-4464-a496-23e675753932/earth-inside-network-lines_1017-8010-removebg-preview.png" alt="earth" style={{ marginRight: '30px', padding: '20px', marginBottom: '50px' }} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="content-1">
            <div>
              <h1 >Bring you new experience </h1>
              <h1 >to listen all genres </h1>
              <h1 >from all over the world</h1>
            </div>
        </div>
        
        
      </div>
    </div>
  )
}