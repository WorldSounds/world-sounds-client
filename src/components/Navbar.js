import React from 'react'
import '../App.css'
import {
  LoginModal,
  RegisterModal
} from './index'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
  return(
    <>
      <nav className="App-navbar d-flex " style={{ backgroundColor: '#303960', color: 'white', fontFamily: 'Exo' }} >
        <ul className="col d-flex justify-content-end" style={{ listStyleType: 'none', marginRight: '5px' }}>
          <li className="m-2">
            <a href="" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
          </li>
          <li className="m-2" >
            <a href="" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a>
          </li>
        </ul>
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