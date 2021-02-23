import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Navbar } from '../components'
import '../App.css'
import { ArtistCard } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { inputArtistsList, getArtsitsList } from '../store/actions/artistAction'

export default function ArtistList() {
  const { artistsList } = useSelector((state) => state.artistReducer)
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const url = `https://api.spotify.com/v1/search?q=${alphabet[index]}&type=artist`
  
  useEffect(() => {

    dispatch(getArtsitsList(url))     
     console.log(artistsList, 'ini artist');   
  },[index])

  function handleExplore() {
    if(index !== 25) setIndex(index + 1)
    else if( index === 25)setIndex(0)
  }

  function handlePrev() {
    if(index === 0) setIndex(0)
    else if(index !== 0) setIndex(index - 1)
  }
  return(
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
        <div className="mt-5" style={{ marginTop: '20px'}}>
         <div className=" d-flex row justify-content-start" style={{ marginLeft: '50px', marginTop: '80px'}}>
           {
             artistsList?.map(artist => {
               
               return <ArtistCard artist={artist} key={artist.id}/>
              })
            }
         </div>
         <div className="d-flex col justify-content-between" style={{ backgroundColor: '#303960' }}>
           {
             (index !== 0)
             ?
           <div>
             <button className="btn btn-primary" onClick={handlePrev} style={{ borderRadius: '20px', margin: '10px', width: '140px', backgroundColor: 'rgba(69, 182, 144, 1)', border: 'none' }}><i class="bi-chevron-double-left"></i>  Previous</button>
           </div>
           :
           <div></div>
            }
           <div className="d-flex justify-content-center" style={{ marginLeft: '170px', marginTop: '5px', position: 'absolute' }}>
             {
               alphabet.split('').map((el, id) => {
                 if (index === id) return <a href="" onClick={(e) => { (e).preventDefault(); setIndex(id); dispatch(getArtsitsList(url))}} style={{ margin: '10px', fontSize: '20px', color: 'rgba(69, 182, 144, 1)', textDecoration: 'none' }}>{id + 1}</a>
                 return <a href="" onClick={(e) => { (e).preventDefault(); setIndex(id); dispatch(getArtsitsList(url))}} style={{ margin: '10px', fontSize: '20px', color: 'white', textDecoration: 'none' }}>{id + 1}</a>
               })
             }
           </div>
           {
             (index !== 25)
             ?
            <div>
             <button className="btn btn-primary float-end" onClick={handleExplore} style={{ borderRadius: '20px', margin: '10px', backgroundColor: 'rgba(69, 182, 144, 1)', border: 'none' }}>Explore more<i class="bi-chevron-double-right"></i></button>
            </div>
             :
            <div></div>
        
          }
         </div>
        </div>
    </div>
  )
}