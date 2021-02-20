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
        <h1  data-aos="fade-up" data-aos-duration="3000" style={{ fontWeight: 'bold', color: 'rgba(69, 182, 144, 1)', fontSize: '50px' }} >Welcome to WorldSounds</h1>
        <h3 data-aos="fade-up" data-aos-duration="3000" style={{ color: 'white' }} > where you can found unexpected music</h3>
      </div>
      <div className="number d-flex col ">
        <div className="m-5"  data-aos="fade-up" data-aos-duration="3000">
          <h2>3,427</h2>
          <h4>genres</h4>
        </div>
        <div className="m-5" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200">
          <h2>20,342</h2>
          <h4>artists</h4>
        </div>
        <div className="m-5" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">
          <h2>102,393</h2>
          <h4>songs</h4>
        </div>
      </div>
      <div id="bg">
        <img  src="concert.jpg" alt="concert" />
      </div>
      
      <div className="content"  data-aos="zoom-in"  data-aos-duration="1000" style={{ backgroundColor: 'rgba(14, 18, 66, 1)', padding: '20px', height: '500px' }}>
        <div>
            <img src="earth.png" alt="earth" style={{ marginRight: '30px', padding: '20px', marginBottom: '50px' }} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="content-1">
            <div>
              <h1 >Bring you new experience </h1>
              <h1 >to listen all genres </h1>
              <h1 >from all over the world</h1>
            </div>
        </div>
        
      </div>
        <div className="gradient" style={{ height: '1200px', background: 'linear-gradient( rgba(14, 18, 66, 1), rgba(69, 182, 144, 1))' }}>
          <div className="d-flex justify-content-start mt-5" style={{ color: 'white', textAlign: 'left' }}>
            <img className="kaset " src="kaset.jpg" style={{ width: '300px', marginLeft: '60px', marginTop: '50px', border: '10px solid white' }} />
            <div style={{ margin: '50px' }} >
              <h1 style={{  fontSize: '50px' }}>Thousand</h1>
              <h1 style={{  fontSize: '50px' }}>genres in</h1>
              <h1 style={{  fontSize: '50px' }}>one web</h1>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-5" style={{ color: 'white', textAlign: 'right' }}>
            <div style={{ margin: '50px' }} >
              <h1 style={{  fontSize: '50px' }}>Play the songs</h1>
              <h1 style={{  fontSize: '50px' }}>just one</h1>
              <h1 style={{  fontSize: '50px' }}>click</h1>
            </div>
            <img className="kaset " src="austin.jpg" style={{ width: '300px', marginRight: '60px', marginTop: '50px', border: '10px solid white' }} />
          </div>
        </div>
    </div>
  )
}