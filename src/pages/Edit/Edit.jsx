import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Edit.scss'
import axios from 'axios'
import { Button } from '@mui/material'

const Edit = () => {
  const { path, id } = useParams()
  const token = useSelector(state => state.auth.user.token)
  let absolutePath;
  switch (path) {
    case 'about':
      absolutePath = 'portfolio/en/about'
      break;
    case 'work':
      absolutePath = 'portfolio/en/work'
      break;
    case 'skills':
      absolutePath = 'portfolio/en/skills'
      break;
    case 'testimonials':
      absolutePath = 'portfolio/en/testimonials'
      break;
    case 'experiences':
      absolutePath = 'portfolio/en/experiences'
      break;
    case 'form':
      absolutePath = 'portfolio/contact'
      break;
    default:
      absolutePath = 'Server URL not found'
      break;
  }
  const findDataById = async () => {
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}${absolutePath}/${id}`)
    const data = await res.data
    console.log(data)
    console.log(`${import.meta.env.VITE_SERVER_URI}${absolutePath}/${id}`)
  }

  return (
    <>
      <div>Edit</div>
      <div>token</div>
      <div className='edit-wrapper'><h1>AMIGO</h1></div>
      <div className='edit-wrapper'><h1>AMIGO</h1></div>
      <div className='edit-wrapper'><h1>AMIGO</h1></div>
      <div className='edit-wrapper'><h1>{id}</h1></div>
      <div className='edit-wrapper'><h1>{path}</h1></div>
      <div className='edit-wrapper'><Button onClick={findDataById}>Click</Button></div>
    </>
  )
}

export default Edit