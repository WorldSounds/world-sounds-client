import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components'
import { setLoginStatus } from '../store/actions/userAction'


export default function UserPage() {
  const dispatch = useDispatch()
  const { access_token, refresh_token } = useParams()


  useEffect(() => {
     if (access_token)
    localStorage.setItem('access_token', access_token)
    dispatch(setLoginStatus(true))

    
  }, [access_token])
return(
    <div>
      <Navbar />
      <p>lalala</p>
    </div>
  )
}