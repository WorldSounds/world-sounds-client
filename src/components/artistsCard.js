import React from 'react'

export default function ArtistCard() {
  return(
    <>
      <div className="card m-1" style={{width: '230px', backgroundColor: 'rgba(69, 182, 144, 0)', border: '0.5px solid gray', borderRadius: '10px', color: 'white'}}>
        <img src="https://d2ih5qgee2kfcl.cloudfront.net/content/2021/01/19/N4snjEV/nadin-amizah-janji-akan-hati-hati-terkait-penggunaan-kata-kaya-dan-miskin65_700.jpg" className="card-img-top mt-2" alt="Nadin" style={{ borderRadius: '10px'}} />
        <div className="card-body" style={{ textShadow: '1px 1px 1px #000' }}>
          <h5 className="card-title" style={{ fontWeight: '900' }}>Nadin Amizah</h5>
          <p className="card-text"> Indie Pop<br></br>221,233 listeners</p>
          <p className="card-text"></p>
        </div>
      </div>
    </>
  )
}