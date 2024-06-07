import React from 'react'
import './home.css'
import image from '../../image/hero.jpg'
import Gellery from '../Gellery/Gellery'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className='home_contaner'>

      <img src={image} alt="" />
      <Gellery />
      <Contact/>
    </div>
  )
}

export default Home