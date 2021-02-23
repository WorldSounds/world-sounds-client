import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BubbleChartArtists, Navbar } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchArtists } from '../store/actions/songsAction'

const Artists = () => {
  // const [artistsData, setArtistsData] = useState([])
  const { genre } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { artists } = useSelector(state => state)


  useEffect(() => {
    dispatch(fetchArtists(genre))
  }, [genre])

  if (artists.loading) {
    return (
      <h1>loading...</h1>
    )
  } else if (artists.error) {
    return (
      <h1>{artists.error}</h1>
    )
  } else {
    return (
      <div className="artists" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
        <Navbar />
        <div>
          <div className="">
            <BubbleChartArtists data={artists.data}/>
          </div>
        </div>
      </div>
    )
  }

}

export default Artists
