import React, { useEffect, useState } from 'react'
import genres from '../Assets/JSON/chartData.json'
import { useHistory, useParams } from 'react-router-dom'
import { BubbleChartChildren, Navbar } from '../components'

const Children = () => {
  const { children } = useParams()
  const [childrenData, setChildrenData] = useState([])
  const history = useHistory()

  useEffect(() => {
    genres.map(genre => {
      if (genre._id === children) {
        setChildrenData(genre.children)
      }
    })
  }, [children])

  const handleBack = () => {
    history.goBack()
  }

  if (childrenData.length > 0) {
    return (
      <div className="children" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
        <Navbar />
      <div>
        <button className="btn-success" onClick={handleBack}> go back </button>
      </div>
        <div>
          <div className="circle">
            <BubbleChartChildren data={childrenData}/>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <h1>loading...</h1>
    )
  }
}

export default Children
