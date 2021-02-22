import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { BubbleChartSongs, Navbar } from '../components'

const Songs = () => {
  const [songsData, setSongsData] = useState([])
  const { genre } = useParams()

  const wildcard = () => {
    const random_wildcards = ['%25a%25', 'a%25', '%25a',
      '%25e%25', 'e%25', '%25e',
      '%25i%25', 'i%25', '%25i',
      '%25o%25', 'o%25', '%25o',
      '%25u%25', 'u%25', '%25u']
    return random_wildcards[Math.floor(Math.random()*16)]
  }

  useEffect(() => {
    if (songsData.length === 0) {
      (async () => {
        try {
          const songsDataHolder = []
          for (let i = 0; i < 10; i++) {
            let randomize = wildcard()
            let songs = await axios({
              headers: {Authorization: "Bearer BQAPg-UgNZ4ZHysgAt7zno_tCkV3R-Y8WLzNwJTH7xW8Iy6YZtSIKTwTUOjLWFOQzq-vawLFxwd6Tr9d8yIYpyOz3mbjxyHPG8YHVPltzgnD8WpLTBOidNFSlcKN248dN6qOdmg7PyQaCr48wFVMkBp6Te-Js8xnU-6OTQl-ZyMnNyXVEq85g2rW1uf_LY0kRHaILZvgCNQ7-AtKpS7cz7pJtFK-i1kgfLZe16sl11XNLg7eFqNFHpqwBG1BGbZFQy3wRMyiCxiCe2dogxDOwBUlTg"},
              method: 'GET',
              url: `https://api.spotify.com/v1/search?q=${randomize}%20genre:%22${encodeURIComponent(genre)}%22&type=track&offset=10`
            })
            songs.data.tracks.items.map(track => {
              songsDataHolder.push({
                _id: track?.name,
                value: track?.popularity,
                preview_url: track?.preview_url,
                artist: track?.artists[0].name
              })
            })
          }
        setSongsData(songsDataHolder)
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
            <BubbleChartSongs data={songsData}/>
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
