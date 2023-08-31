import React from 'react'
import Form from './Components/Form'
import Section from './Components/Section/Section'
import Section2 from './Components/Section2/Section2'
import Footer from '../../Components/Footer'
import YouTubeVideo from '../homePage/Components/aboutUs/YoutubeVideo'
import AboutUs from '../homePage/Components/aboutUs/AboutUs'
import './styles.css'

const Home = () => {
  const videoIds = ["a7it63FFDYQ", "QqUiaRmx794"];
  return (
    <div className="interacciones-user">
      <Section/>
      <Section2/> 
      <AboutUs/>
      <h1 id="Tittle_videos">Videos que te pueden interesar</h1>
      <div className='Container_Videos'>
      {videoIds.map(videoId => (
        <YouTubeVideo key={videoId} videoId={videoId} />
      ))}
      </div>
      <Form/>
      <div>
      <Footer />
      </div>
    </div>
  )
}
export default Home