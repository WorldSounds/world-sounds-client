import React, { useState, useEffect } from "react";
import ReactBubbleChart from "react-bubble-chart"
import { useHistory } from "react-router-dom"

export default function BubbleChartParent( { data } ) {
  const [chartState, setChartState] = useState({
    key: 'start',
    data,
  })
  const history = useHistory()
  var colorLegend = [
    //reds from dark to light
    {color: "#67000d", textColor: "#ffffff"}, 
    "#a50f15", 
    "#cb181d", 
    "#ef3b2c", 
    "#fb6a4a", 
    "#fc9272", 
    "#fcbba1", 
    "#fee0d2",
    //neutral grey
    {color: "#f0f0f0", text: 'Neutral'},
    // blues from light to dark
    "#deebf7", 
    "#c6dbef", 
    "#9ecae1", 
    "#6baed6", 
    "#4292c6", 
    "#2171b5",
    {color:"transparent", textColor: '#ffffff'}, 
    {color: "#08306b"}
  ];
  const handleClick = input => {
    const isGroup = input.children !== undefined

    console.log(input._id)
    if (isGroup) {
      history.push(`/${input._id}`)
    }
  }

  return (
    <div>
      <ReactBubbleChart
        {...data}
        className="chart__bubble"
        key={chartState.key}
        data={chartState.data}
        onClick={handleClick}
        colorLegend={colorLegend}
        fixedDomain={{min: 0, max: 100}}
      />
    </div>
    
  )
}