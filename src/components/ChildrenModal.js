import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBubbleChildren } from '../store/actions/songsAction'


const ChildrenModal = ({ isOpen, setIsOpen, data}) => {
  const history = useHistory()
  const audioRef = useRef()
  const dispatch = useDispatch()
  const [getGenre, setGetGenre] = useState('')
  const [previewSong, setPreviewSong] = useState('')
  const { bubbleChildren } = useSelector(state => state)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (bubbleChildren.data.length > 0) {
      setPreviewSong(bubbleChildren.data[0].preview_url)
    }
  }, [bubbleChildren])

  useEffect(() => {
    if (getGenre) {
      dispatch(fetchBubbleChildren(getGenre))
    }
  }, [getGenre])

  useEffect(() => {
    if (previewSong) {
      setIsPlaying(true)
      audioRef.current.play()
    } else {
      setPreviewSong('')
    }
  }, [previewSong])
  
  const handleClickPlay = () => {
    if (!previewSong) {
      setGetGenre(data._id)
    } else {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }

  const handleClickArtists = () => {
    history.push(`/artists/${data._id}`)
  }

  const handleClickSongs = () => {
    history.push(`/songs/${data._id}`)
  }

  const handleClickFavorite = () => {
    console.log(`favorite`)
  }

  const handleHide = () => {
    setIsOpen(false)
  }

  const handleClickPause = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }
  
  return (
    <>
      { previewSong ? <audio ref={audioRef} src={previewSong} /> : '' }
      <Modal show={isOpen} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>{data._id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
        <div>
          <label></label>
          { isPlaying 
            ? <Button variant="danger" onClick={handleClickPause}>Pause</Button>
            : <Button variant="success" onClick={handleClickPlay}>Play</Button> }
        </div>
        <div>
          <label></label>
          <Button onClick={handleClickArtists}>Artists</Button>
        </div>
        <div>
          <label></label>
          <Button onClick={handleClickSongs}>Songs</Button>
        </div>
        <div>
          <label></label>
          <Button onClick={handleClickFavorite}>Favorite</Button>
        </div>
        </Container>
      </Modal.Body>
      </Modal>
    </>
  )
}

export default ChildrenModal
