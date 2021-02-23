import React, { useState, useEffect, useRef } from 'react'
import ReactBubbleChart from 'react-bubble-chart'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBubbleChildren } from '../store/actions/songsAction'

const BubbleChartChildren = ({ data }) => {
  
  const [childrenData, setChildrenData] = useState({
    key: 'start children',
    data
  })
  const [getGenre, setGenre] = useState('')
  const { bubbleChildren } = useSelector(state => state)
  const [previewSong, setPreviewSong] = useState('')
  const audioRef = useRef()
  const dispatch = useDispatch()
  let colorLegend = [
    { color: "#45b690", textColor: "#ffffff"},
    { color: "#307f65", textColor: "#ffffff"},
    { color: "#6770be", textColor: "#ffffff"},
    { color: "#484e85", textColor: "#ffffff"},
    { color: "#4467be", textColor: "#ffffff"},
    { color: "#304885", textColor: "#ffffff"},
    { color: "#433f97", textColor: "#ffffff"},
    { color: "#2f2c6a", textColor: "#ffffff"}
  ]
  
  const handleClick = (input) => {
    setPreviewSong('')
    setGenre(input._id)
  }

  useEffect(() => {
    if (getGenre) {
      dispatch(fetchBubbleChildren(getGenre))
    }
  }, [getGenre])

  useEffect(() => {
    if (bubbleChildren.data.length > 0) {
      setPreviewSong(bubbleChildren.data[0].preview_url)
    }
  }, [bubbleChildren])

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
      key={childrenData.key}
      data={childrenData.data}
      onClick={handleClick}
      colorLegend={colorLegend}
      />
    </div>
  )
}

export default BubbleChartChildren
