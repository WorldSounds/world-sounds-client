import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Navbar } from '../components'
import '../App.css'
import { ArtistCard } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { inputArtistsList, getArtsitsList } from '../store/actions/artistAction'
import ReactPaginate from 'react-paginate';

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


  function handlePageClick(e) {
    setIndex(e.selected)
  }
  console.log(setIndex);
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
           <div className="d-flex justify-content-center my-2" style={{ margin: 'auto', backgroundColor: 'rgba(69, 182, 144, 1)', borderRadius: '25px' }}>
             
               <ReactPaginate
               previousLabel={'previous'}
               nextLabel={'explore more'}
               breakLabel={'...'}
               breakClassName={'break-me'}
               pageCount={alphabet.length}
               marginPagesDisplayed={2}
               pageRangeDisplayed={3}
               onPageChange={(e) => handlePageClick(e)}
               containerClassName={'pagination'}
               subContainerClassName={'pages pagination'}
               activeClassName={'active'}
               onClick={(e) => handlePageClick(e)}
              />
    
           </div>
         </div>
        </div>
    </div>
  )
}