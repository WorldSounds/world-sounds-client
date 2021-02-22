import React, { useState } from 'react'
import ReactBubbleChart from 'react-bubble-chart'

const BubbleChartArtists = ({ data }) => {
  const [artistsChart, setArtistsChart] = useState({
    key: 'artists',
    data,
  })
  var colorLegend = [
    { color: "#40af93", textColor: "#ffffff"},
    { color: "#109b78", textColor: "#ffffff"},
    { color: "#87c56a", textColor: "#ffffff"},
    { color: "#69b645", textColor: "#ffffff"},
    { color: "#66b8bd", textColor: "#ffffff"},
    { color: "#889c9e", textColor: "#ffffff"},
    { color: "#4dacb2", textColor: "#ffffff"},
    { color: "#008891", textColor: "#ffffff"}
  ].reverse();

  const handleClick = input => {
    console.log(input._id)
  }

  return (
    <div style={{ width: "", height: "300vh"}}>
      <ReactBubbleChart
        {...data}
        className="chart__bubble"
        key={artistsChart.key}
        data={artistsChart.data}
        onClick={handleClick}
        colorLegend={colorLegend}
      />
    </div>
  )
}

export default BubbleChartArtists
