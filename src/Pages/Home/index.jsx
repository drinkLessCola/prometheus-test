import React from 'react'
import './index.css'
import image from './image.jpg'

export default function Home() {
  console.log('Home render')

  return (
    <div className='Home'>
      <img src={image} alt="home"></img>
    </div>
  )
}
