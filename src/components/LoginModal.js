import React from 'react'

export default function LoginModal() {
  return (
      <>
      <div className="modal-dialog">
      <div className="modal-content" >
        <div className="modal-header" style={{ backgroundColor: '#303960' }}>
          <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white', fontFamily: 'Exo' }}>Login</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{fontFamily: 'Roboto' }}>
        {/* LOGIN FORM */}
        <form>
          <div className="d-flex col">
            <label style={{ marginRight: '35px', marginTop: '2px' }}>Email</label>
            <input className="form-control" type="text"  name="email" style={{ borderRadius: '20px', borderColor: 'rgba(69, 182, 144, 1)'}}/><br></br>
          </div>
          <div className="d-flex col mt-2">
            <label style={{ marginRight: '6px', marginTop: '2px' }} >Password</label>
            <input className="form-control" type="password" name="password" style={{ borderRadius: '20px', borderColor: 'rgba(69, 182, 144, 1)'}}/>
          </div>
        </form>
        </div>
        <div className="d-flex row">
         <div>
          <button type="button" className="btn btn-primary" style={{ borderRadius: '20px', width: '300px'  }}>Login</button><br></br>
         </div>
         <div className="mt-1">
          <button type="button" className="btn btn-primary" style={{ borderRadius: '20px', width: '300px', backgroundColor: 'rgba(69, 182, 144, 1)', border: 'none', color: 'black'  }}><img src="spotify.svg" alt="spotify icon" style={{ width: '25px' }} /> Continue with Spotify</button><br></br>
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