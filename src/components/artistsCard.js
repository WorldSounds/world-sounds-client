import React from 'react'
import '../App.css'
import { useHistory  } from 'react-router-dom'

export default function ArtistCard(props) {
  const history = useHistory()
  return(
    <>
      <div className="card m-1" id="artist-card">
        <a href="" onClick={(e) => { e.preventDefault(); history.push(`/artist/${props.artist.id}`) }} >
          <img src={props.artist.images[0]?.url} width="200" height="200" style={{ borderRadius: '100%'}}/>
        </a>
        <div className="card-body" style={{ textShadow: '1px 1px 1px #000' }}>
        <a href="" onClick={(e) => { e.preventDefault(); history.push(`/artist/${props.artist.id}`) }} >
          <h5 className="card-title" style={{ fontWeight: '900' }}>{props.artist.name}</h5>
        </a>
          <p className="card-text mb-4">{new Intl.NumberFormat().format(props.artist.followers.total)} followers</p>
        </div>
      </div>
    </>
  )
}