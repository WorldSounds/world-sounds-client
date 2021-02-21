import React, { useState } from 'react'
import ReactBubbleChart from 'react-bubble-chart'

const BubbleChartChildren = ({ data }) => {
  const [childrenData, setChildrenData] = useState({
    key: 'start children',
    data
  })

  const handleClick = (input) => {
    console.log(input._id)
  }

  return (
    <div style={{ height: "200vh" }}>
      <ReactBubbleChart 
      {...data}
      className="chart__bubble"
      key={childrenData.key}
      data={childrenData.data}
      onClick={handleClick}
      />
    </div>
  )
}

export default BubbleChartChildren
