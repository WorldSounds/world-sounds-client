import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { BubbleChartSongs, Navbar } from '../components'

const Songs = () => {
  const [songsData, setSongsData] = useState([])
  const { genre } = useParams()

  const random_wildcards = [
    '%25a%25',
    '%25b%25',
    '%25c%25',
    '%25d%25',
    '%25e%25',
    '%25f%25',
    '%25g%25',
    '%25h%25',
    '%25i%25',
    '%25j%25',
    '%25l%25',
    '%25m%25',
    '%25n%25',
    '%25o%25',
    '%25p%25',
    '%25q%25',
    '%25r%25',
    '%25s%25',
    '%25t%25',
    '%25u%25',
    '%25v%25',
    '%25w%25',
    '%25x%25',
    '%25y%25',
    '%25z%25']

  useEffect(() => {
    if (songsData.length === 0) {
      (async () => {
        try {
          const songsDataHolder = []
          for (let i = 0; i < random_wildcards.length; i++) {
            let randomize = random_wildcards[i]
            let songs = await axios({
              headers: { Authorization: "Bearer BQDzMTL2osR8aSyujBf8YwXIIwcwTx8gAt0ON0IjRGYrrxBzp8Z5wqU5r6wd4aGno1EzNXtFuc-0gBaQT2glmyHBgkVgIv6F_GHNTzkhv2hnhcbLWwTdtS3sa7xPJYhe1lhw3yB-FG03iWT3zjl7uCJkmy9NBpom_LYPUcmvz9gzB9m4HlqBtvOf1CYX5VhcBaw0SpVTNMQcwJbSrIpop4i-86yGA8C2rpPqonGkhD3GPDL9Gd1hYDUMMBT5D3Ya0PFdvzxwHjxd8u0_kuSygujugA" },
              method: 'GET',
              url: `https://api.spotify.com/v1/search?q=${randomize}%20genre:%22${encodeURIComponent(genre)}%22&type=track&offset=10`
            })
            songs.data.tracks.items.map(track => {
              songsDataHolder.push({
                _id: track?.name,
                value: track?.popularity ? track.popularity : track.popularity + 20,
                colorValue: track?.popularity ? track.popularity : track.popularity + 20,
                preview_url: track?.preview_url,
                artist: track?.artists[0].name
              })
            })
          }
          setSongsData(songsDataHolder.filter((v, i, a) => a.findIndex(t => (t._id === v._id)) === i))
        }
        catch (err) {
          console.log(err)
        }
      })()
    }
  }, [genre, songsData])


  if (songsData.length > 0) {
    return (
      <div className="songs" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
        <Navbar />
        <div>
          <div className="">
            <BubbleChartSongs data={songsData} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <h1>loading...</h1>
    )
  }
}

export default Songs
