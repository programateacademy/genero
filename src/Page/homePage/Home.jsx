import React from 'react'
import Form from './Components/Form'
import Section from './Components/Section/Section'
import Section2 from './Components/Section2/Section2'
import Footer from '../../Components/Footer'
import YouTubeVideo from '../homePage/Components/aboutUs/YoutubeVideo'
import AboutUs from '../homePage/Components/aboutUs/AboutUs'
import './styles.css'

const Home = () => {
  return (
    <div>
      <Section/>
      <Section2/> 
      <AboutUs/>
      <YouTubeVideo/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home