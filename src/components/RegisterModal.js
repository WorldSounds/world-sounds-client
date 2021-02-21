import React from 'react'

export default function RegisterModal() {
  return (
      <>
      <div className="modal-dialog">
      <div className="modal-content" style={{ borderRadius: '8px' }}>
        <div className="modal-header" style={{ backgroundColor: '#303960' }}>
          <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white', fontFamily: 'Exo' }}>Register</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: 'white' }}></button>
        </div>
        <div className="modal-body" style={{fontFamily: 'Roboto' }}>
        {/* Register FORM */}
        <form>
          <div className="form-floating mt-2">
            <input className="form-control" type="text"  name="email" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}}/>
            <label className="form-label">Email</label>
          </div>
          <div className="form-floating mt-2">
            <input className="form-control" type="text" name="username" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}}/>
            <label className="form-label">Username</label>
          </div>
          <div className="form-floating mt-2">
            <input className="form-control" type="password" name="password"  style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}}/>
            <label className="form-label">Password</label>
          </div>
        </form>
        </div>
        <div className="d-flex row">
         <div>
          <button type="button" className="btn btn-primary" style={{ borderRadius: '20px', width: '300px', backgroundColor: 'rgba(14, 18, 66, 1)', border: 'none'  }}>Register</button><br></br>
         </div>
         <div className="mt-2">
          <button type="button" className="btn btn-primary" style={{ borderRadius: '20px', width: '300px', backgroundColor: 'rgba(69, 182, 144, 1)', border: 'none', color: 'black'  }}><img src="spotify.svg" alt="spotify icon" style={{ width: '25px' }} /> Continue with Spotify</button><br></br>
         </div>
         <div className="mt-2">
          <p>have an account? <a href=""  data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#loginModal" >Login</a></p>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}