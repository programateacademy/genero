import React from 'react'
import Form from './Components/Form'
import './styles.css'
import Container from './Components/Section/Container'
import WaveAnimation from './Components/Section/WaveAnimation'
import YouTubeVideo from './Components/aboutUs/YoutubeVideo'
import AboutUs from './Components/aboutUs/AboutUs'

const Home = () => {
  return (
    <div>
      <YouTubeVideo/>
      <AboutUs/>
      <Container/>
      <WaveAnimation/> 
      <Form/>

    </div>
  )
}

export default Home