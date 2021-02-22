import React, { useState, useEffect } from 'react'
import ReactBubbleChart from 'react-bubble-chart'
import axios from 'axios'

const BubbleChartChildren = ({ data }) => {
  const [childrenData, setChildrenData] = useState({
    key: 'start children',
    data
  })
  const [getGenre, setGenre] = useState('')
  let check = []
  var colorLegend = [
    { color: "#45b690", textColor: "#ffffff"},
    { color: "#307f65", textColor: "#ffffff"},
    { color: "#6770be", textColor: "#ffffff"},
    { color: "#484e85", textColor: "#ffffff"},
    { color: "#4467be", textColor: "#ffffff"},
    { color: "#304885", textColor: "#ffffff"},
    { color: "#433f97", textColor: "#ffffff"},
    { color: "#2f2c6a", textColor: "#ffffff"}
  ];


  const wildcard = () => {
    const random_wildcards = ['%25a%25', 'a%25', '%25a',
      '%25e%25', 'e%25', '%25e',
      '%25i%25', 'i%25', '%25i',
      '%25o%25', 'o%25', '%25o',
      '%25u%25', 'u%25', '%25u']
    return random_wildcards[Math.floor(Math.random()*16)]
  }
  
  const handleClick = (input) => {
    console.log(input._id)
    setGenre(input._id)
  }

  useEffect(() => {
    if (getGenre.length !== 0) {
      (async () => {
        try {
          for (let i = 0; i < 10; i++) {
            let randomize = wildcard()
            let query = await axios({
              headers: {Authorization: "Bearer BQBhUqhfkj_x3FCQKbYHD3BQmV6Qkeo0o6Y0NOCxG1jFpUYH6hnhbr_4oG6Bi_CPzUTry5gvOFrcfxtOwhid_8zjdVB10_DYB-CBCAJt7jHuMoq0735aKoMIFFl0cmpefyOT1w5TUfkKupaiO9xFTlzRhcvgVp-twwpDZc3SOaEAcAOYiD1AmQT5VJP964cbMdgCJkC9W_Ls5oQK7QpPLkbokjs9HsG_4V_elbFTRn4Kp5VIAACM1ARalCWnmkXATuAHH6R7aihgjyLI9fGRjh5aeg"},
              method: 'GET',
              url: `https://api.spotify.com/v1/search?q=${randomize}%20genre:%22${encodeURIComponent(getGenre)}%22&type=track&offset=10`
            })
            query.data.tracks.items.map(track => {
              check.push({
                _id: track?.name,
                value: track?.popularity,
                preview_url: track?.preview_url,
                artist: track?.artists[0].name
              })
            })
          }
         console.log(check[0])
        }
        catch (err) {
          console.log(err)
        }
      })()
    }
  }, [getGenre])

  return (
    <div style={{ height: "200vh" }}>
      <ReactBubbleChart 
      {...data}
      className="chart__bubble"
      key={childrenData.key}
      data={childrenData.data}
      onClick={handleClick}
      colorLegend={colorLegend}
      />
    </div>
  )
}

export default BubbleChartChildren
