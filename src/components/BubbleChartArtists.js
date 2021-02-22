import React, { useState } from 'react'
import ReactBubbleChart from 'react-bubble-chart'

const BubbleChartArtists = ({ data }) => {
  const [artistsChart, setArtistsChart] = useState({
    key: 'artists',
    data,
  })

  const handleClick = input => {
    console.log(input._id)
  }

  return (
    <div style={{ width: "", height: "300vh" }}>
      <ReactBubbleChart
        {...data}
        className="chart__bubble"
        key={artistsChart.key}
        data={artistsChart.data}
        onClick={handleClick}
      />
    </div>
  )
}

export default BubbleChartArtists
