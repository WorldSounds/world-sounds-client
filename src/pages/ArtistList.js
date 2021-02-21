import React from 'react';
import { Navbar } from '../components'
import '../App.css'
import { ArtistCard } from '../components'

export default function ArtistList() {

  return(
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
        <div className="">
         <div className=" d-flex row justify-content-start mt-5" style={{ marginLeft: '50px' }}>
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <div >
            <button type="button" className="btn btn-primary mt-4" style={{ borderRadius: '20px' }}>Load more</button>
          </div>
         </div>
        </div>
    </div>
  )
}