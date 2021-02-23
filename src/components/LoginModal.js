import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser, setUserData } from '../store/actions/userAction'

export default function LoginModal() {
  const dispatch = useDispatch()
  const [ formUser, setFormUser ] = useState({
    validator: '',
    password: ''
  })

  const [error, setError] = useState(false)
  const [succes, setSucces] = useState(false)
  const history = useHistory()
  function handleLoginSpotify(e){
    e.preventDefault()
    window.location.replace('http://localhost:6300/loginSpotify')
  }
  function handleChange (e) {
    const {name, value} = e.target
    const user = { ...formUser, [name]: value }
    setFormUser(user)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formUser);
    dispatch(setUserData(formUser))
  }

  return (
      <>
      <div className="modal-dialog">
      <div className="modal-content"  style={{ borderRadius: '8px' }}>
        <div className="modal-header" style={{ backgroundColor: '#303960' }}>
          <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white', fontFamily: 'Exo' }}>Login</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{fontFamily: 'Roboto' }}>
        {/* LOGIN FORM */}
        <form className="form-floating" >
          <div className=" form-floating " >
            <input className="form-control" type="text" id="email-username-login" name="validator" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/><br></br>
            <label className="form-label" for="email-username-login" >Email/Username</label>
          </div>
          <div className="form-floating">
            <input className="form-control" id="password-login" type="password" name="password" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/>
            <label className="form-label" for="password-login" >Password</label>
          </div>
        </form>
        </div>
        <div className="d-flex row">
         <div>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ borderRadius: '20px', width: '300px', backgroundColor: 'rgba(14, 18, 66, 1)', border: 'none'  }} onClick={handleSubmit}>Login</button><br></br>
         </div>
         <div className="mt-2">
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ borderRadius: '20px', width: '300px', backgroundColor: 'rgba(69, 182, 144, 1)', border: 'none', color: 'black'  }} onClick={handleLoginSpotify} ><img src="spotify.svg" alt="spotify icon" style={{ width: '25px' }} /> Continue with Spotify</button><br></br>
         </div>
         <div className="mt-2">
          <p>don't have an account? <a href=""  data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a></p>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}