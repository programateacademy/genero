import React from 'react'
import Form from './Components/Form'
import './styles.css'
import Section from './Components/Section/Section'
import Section2 from './Components/Section2/Section2'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <div>
      <Section/>
      <Section2/> 
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home