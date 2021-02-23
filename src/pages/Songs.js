import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BubbleChartSongs, Navbar } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSongs } from '../store/actions/songsAction'

const Songs = () => {
  // const [songsData, setSongsData] = useState([])
  const { genre } = useParams()
  const dispatch = useDispatch()
  const { songs } = useSelector(state => state.songsReducer)


  useEffect(() => {
    dispatch(fetchSongs(genre))
  }, [genre])

  if (songs.loading) {
    return (
      <h1>loading...</h1>
    )
  } else if (songs.error) {
    return (
      <h1>{songs.error}</h1>
    )
  } else {
    return (
      <div className="songs" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
        <Navbar />
        <div>
          <div className="">
            <BubbleChartSongs data={songs.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Songs
