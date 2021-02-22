import React, { useState } from 'react'
import ReactBubbleChart from 'react-bubble-chart'

const BubbleChartSongs = ({ data }) => {
  const [songsChart, setSongsChart] = useState({
    key: 'songs',
    data
  })

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
      />
    </div>
  )
}

export default BubbleChartSongs
