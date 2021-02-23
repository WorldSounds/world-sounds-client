import React, { useState, useEffect } from 'react'
import ReactBubbleChart from 'react-bubble-chart'
import ChildrenModal from './ChildrenModal'

const BubbleChartChildren = ({ data }) => {
  
  const [childrenData, setChildrenData] = useState({
    key: 'start children',
    data
  })
 
  let colorLegend = [
    { color: "#45b690", text: 'least popular', textColor: "#ffffff"},
    { color: "#307f65", textColor: "#ffffff"},
    { color: "#6770be", textColor: "#ffffff"},
    { color: "#484e85", textColor: "#ffffff"},
    { color: "#4467be", textColor: "#ffffff"},
    { color: "#304885", textColor: "#ffffff"},
    { color: "#433f97", textColor: "#ffffff"},
    { color: "#2f2c6a", text: 'most popular', textColor: "#ffffff"}
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [childData, setChildData] = useState({})
  
  const handleClick = (input) => {
    setChildData({
      _id: input._id
    })
    setIsOpen(true)
  }
  // console.log(document.getElementByClassName('legend-key'));
  return (
    <div>
      { isOpen ? <ChildrenModal setIsOpen={setIsOpen} isOpen={isOpen} data={childData}/> : ''}
      <ReactBubbleChart 
      {...data}
      className="chart__bubble"
      key={childrenData.key}
      data={childrenData.data}
      onClick={handleClick}
      colorLegend={colorLegend}
      selectedColor="#737373"
      fixedDomain={{min: 20, max: 100}}
      legend={true}
      legendSpacing={10}
      />
    </div>
  )
}

export default BubbleChartChildren
