import React, { useState, useEffect, useRef } from 'react'
import ReactBubbleChart from 'react-bubble-chart'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBubbleArtists } from '../store/actions/songsAction'

const BubbleChartArtists = ({ data }) => {
  const [artistsChart, setArtistsChart] = useState({
    key: 'artists',
    data,
  })
  const [artistQuery, setArtistQuery] = useState('')
  const [previewSong, setPreviewSong] = useState('')
  const audioRef = useRef()
  const dispatch = useDispatch()
  const { bubbleArtists } = useSelector(state => state.songsReducer)

  let colorLegend = [
    { color: "#008891", text: 'least popular', textColor: "#ffffff"},
    { color: "#4dacb2", textColor: "#ffffff"},
    { color: "#889c9e", textColor: "#ffffff"},
    { color: "#66b8bd", textColor: "#ffffff"},
    { color: "#69b645", textColor: "#ffffff"},
    { color: "#87c56a", textColor: "#ffffff"},
    { color: "#109b78", textColor: "#ffffff"},
    { color: "#40af93", text: 'most popular', textColor: "#ffffff"}
  ]

  const handleClick = input => {
    setPreviewSong('')
    setArtistQuery(input.uri)
  }

  useEffect(() => {
    if (artistQuery) {
      dispatch(fetchBubbleArtists(artistQuery))
    }
  }, [artistQuery])

  useEffect(() => {
    if (bubbleArtists.data) {
      setPreviewSong(bubbleArtists.data)
      colorLegend.reverse()
    }
  }, [bubbleArtists.data])

  useEffect(() => {
    if (previewSong) {
      audioRef.current.play()
    }
  }, [previewSong])

  return (
    <div>
      { previewSong ? <audio ref={audioRef} src={previewSong} /> : '' }
      <ReactBubbleChart
        {...data}
        className="chart__bubble"
        key={artistsChart.key}
        data={artistsChart.data}
        onClick={handleClick}
        colorLegend={colorLegend}
        legend={true}
      />
    </div>
  )
}

export default BubbleChartArtists
