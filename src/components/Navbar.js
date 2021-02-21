import React from 'react'
import '../App.css'
import {
  LoginModal,
  RegisterModal,
} from './index'
import {
  Link
} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
  return(
    <>
      <nav className="App-navbar d-flex justify-content-between" style={{ backgroundColor: '#303960', color: 'white', fontFamily: 'Exo' }} >
        <div>
          <Link to="/home"><img src="WS logo.png" alt="worldsounds" style={{ width: '80px', marginLeft: '15px' }} /></Link>
        </div>
        <div className="navigation">
          <ul className="col d-flex " style={{ listStyleType: 'none', marginRight: '5px' }}>
            <li className="mt-2">
              <Link  to="/home" style={{ marginRight: '10px' }}>Home</Link>
            </li>
            <li className="mt-2">
              <Link  to="/artists" style={{ marginRight: '10px' }}>Artists</Link>
            </li>
            <li className="mt-2" >
              <Link to="/playlists" style={{ marginRight: '10px' }}>Playlists</Link>
            </li>
          </ul>
        </div>
        <div className="login">
          <ul className="col d-flex ">
            <li className="mt-2" style={{ marginRight: '10px', textDecoration: 'none' }}>
              <a href="" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
            </li>
            <li className="mt-2" style={{ marginRight: '10px' }}>
              <a href="" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a>
            </li>
          </ul>
        </div>
      </nav> 
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <LoginModal />
      </div>
      <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <RegisterModal />
      </div>
    </>
  )
}