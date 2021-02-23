import React, { useState, useRef, useEffect } from 'react'
import ReactBubbleChart from 'react-bubble-chart'

const BubbleChartSongs = ({ data }) => {
  const [songsChart, setSongsChart] = useState({
    key: 'songs',
    data
  })
  const [previewSong, setPreviewSong] = useState('')
  const audioRef = useRef()

  var colorLegend = [
    { color: "#3125b1", text: 'least popular', textColor: "#ffffff"},
    { color: "#5a51c1", textColor: "#ffffff"},
    { color: "#5c2d99", textColor: "#ffffff"},
    { color: "#7d57ad", textColor: "#ffffff"},
    { color: "#5847b8", textColor: "#ffffff"},
    { color: "#796cc6", textColor: "#ffffff"},
    { color: "#b233a7", textColor: "#ffffff"},
    { color: "#c15cb9", text: 'most popular', textColor: "#ffffff"}
  ]

  const handleClick = input => {
    setPreviewSong('')
    setPreviewSong(input.preview_url)
  }

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
        key={songsChart.key}
        data={songsChart.data}
        onClick={handleClick}
        colorLegend={colorLegend}
      />
    </div>
  )
}

export default BubbleChartSongs
