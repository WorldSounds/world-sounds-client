import React, { useState } from 'react'
import ReactBubbleChart from 'react-bubble-chart'

const BubbleChartSongs = ({ data }) => {
  const [songsChart, setSongsChart] = useState({
    key: 'songs',
    data
  })
  var colorLegend = [
    { color: "#3125b1", textColor: "#ffffff"},
    { color: "#5a51c1", textColor: "#ffffff"},
    { color: "#5c2d99", textColor: "#ffffff"},
    { color: "#7d57ad", textColor: "#ffffff"},
    { color: "#5847b8", textColor: "#ffffff"},
    { color: "#796cc6", textColor: "#ffffff"},
    { color: "#b233a7", textColor: "#ffffff"},
    { color: "#c15cb9", textColor: "#ffffff"}
  ];

  const handleClick = input => {
    console.log(input._id)
  }

  return (
    <div style={{ width: "", height: "300vh" }}>
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
