import React, { useEffect, useState } from 'react'
import '../App.css'
import {
  LoginModal,
  RegisterModal,
} from './index'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  searchingArtist } from '../store/actions/artistAction'
import { setLoginStatus } from '../store/actions/userAction';


export default function Navbar() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [display, setDisplay] = useState(false)
  const [ displayNav, setDisplayNav ] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const { searchArtist } = useSelector(state => state.artistReducer)
  const { isLogin } = useSelector(state => state.userReducer)

  useEffect(() => {
    
    // const input = 'ava max'
    
    
    // if(input.includes(' ')) {
      //     let splitted = input.split(' ')
      
      //     for(let i=0; i < splitted.length - 1; i++) {
        //         name = name + `${splitted[i]}%20`
        //     }
        //       name = name + splitted[splitted.length - 1]
        //     } else {
          //         name = input
          //      }   
        if (!inputSearch) setDisplay(false)
        let name = encodeURIComponent(inputSearch)
        const url = `https://api.spotify.com/v1/search?q=${name}&type=artist`
        dispatch(searchingArtist(url))
        
      }, [inputSearch, isLogin])
      
      
    function handleInputClick(e) {
      setDisplay(!display)
      setInputSearch(e.target.value)
    }

    function handleChange(e) {
      const { value } = e.target
      setInputSearch(value)
    }

    function handleLogout(e) {
      e.preventDefault()
      localStorage.removeItem('access_token')
      localStorage.removeItem('access_token_local')
      dispatch(setLoginStatus(false))
    }

  return(
    <>
      <nav className="App-navbar d-flex justify-content-between fixed-top shadow" style={{ backgroundColor: '#303960', color: 'white', fontFamily: 'Exo' }} >
        {/* LOGO */}
        <div className="mt-2">
          <Link to="/home"><img src="WS logo.png" alt="worldsounds" style={{ width: '80px', marginLeft: '15px' }} /></Link>
        </div>
        {/* NAVIGATION HOME ARTISTS PLAYLISTS */}
        <div className="navigation">
          <ul className="col d-flex " style={{ listStyleType: 'none', marginRight: '5px' }}>
            <li className="nav-item mt-2">
              <Link className="nav-link" to="/home" style={{ marginRight: '10px' }}>Home</Link>
            </li>
            <li className="nav-item mt-2">
              <Link className="nav-link" to="/artists" style={{ marginRight: '10px' }}>Artists</Link>
            </li>
            {
              (localStorage.access_token_local || localStorage.access_token)
              &&
            <li className="nav-item mt-2" >
              <Link className="nav-link" to="/profile" style={{ marginRight: '10px' }}>profile</Link>
            </li>
            }
          </ul>
        </div>
        {/* NAVIGATION LOGIN REGISTER SEARCH */}
        <div className="login mt-2">
          <ul className="col d-flex ">
          {
            (localStorage.access_token_local || localStorage.access_token)
            ?
            <li  className="mt-2" style={{ marginRight: '10px', textDecoration: 'none' }}>
              <a href=""  onClick={handleLogout}>Logout</a>
            </li>
            :
            <div className="col d-flex">
              <li className="mt-2" style={{ marginRight: '10px', textDecoration: 'none' }}>
                <a href="" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
              </li>
              <li className="mt-2" style={{ marginRight: '10px' }}>
                <a href="" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a>
              </li>
            </div>
          }
            <li className="mt-1" style={{ marginRight: '15px' }}>
              <a href="" data-bs-toggle="collapse" onClick={() => {setDisplayNav(!displayNav)}}><i className="bi-search" style={{ fontSize: '18px' }}></i></a>
            </li>
            {
              (displayNav)
              &&
              <li className="mt-1" style={{ marginRight: '15px' }}>
            <input type="text" className="form-control" placeholder="search" autoComplete="off" data-aos="slide-left" onChange={handleChange} onClick={handleInputClick} style={{ borderRadius: '20px' }} />
            </li>
            }
          </ul>
        </div>
      </nav>
      {
          (display)
          &&
          (searchArtist.length !==0)
          &&
          <div className="card end-0 overflow-scroll" style={{ marginRight: '18px', marginTop: '50px', width: '223px', position: 'fixed', zIndex: '1' }}>
            <ul className="mt-3" style={{ textAlign: 'left' }}>
           {
             searchArtist.map(artist => {
               let link = `/artist/${artist.id}`
               return <li style={{ listStyle: 'none' }}><a className="" href={link} style={{ textDecoration: 'none', color: "black" }} >{artist.name}</a></li> 
              }) 
            }
            </ul>
          </div>

          }

      {/* LOGIN MODAL */}
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <LoginModal />
      </div>
      {/* REGISTER MODAL */}
      <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <RegisterModal />
      </div>
    </>
  )
}