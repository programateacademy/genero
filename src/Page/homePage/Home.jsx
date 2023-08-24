import React from 'react'
import Form from './Components/Form'
import './styles.css'
import Container from './Components/Section/Container'
import WaveAnimation from './Components/Section/WaveAnimation'


const Home = () => {
  return (
    <div>
      <Container/>
     <WaveAnimation/> 
      <Form/>
    </div>
  )
}

export default Home