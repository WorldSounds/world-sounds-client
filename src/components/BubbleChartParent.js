import React, { useState, useEffect } from "react";
import ReactBubbleChart from "react-bubble-chart"
import { useHistory } from "react-router-dom"

export default function BubbleChartParent( { data } ) {
  const [chartState, setChartState] = useState({
    key: 'start',
    data,
  })
  const history = useHistory()
  
  const handleClick = input => {
    const isGroup = input.children !== undefined

    console.log(input._id)
    if (isGroup) {
      history.push(`/${input._id}`)
    }
  }

  return (
    <div style={{ width: "", height: "300vh" }}>
      <ReactBubbleChart
        {...data}
        className="chart__bubble"
        key={chartState.key}
        data={chartState.data}
        onClick={handleClick}
      />
    </div>
  )
}

