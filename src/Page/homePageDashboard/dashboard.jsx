import React from 'react'
import Section from './Components/Section/Section'
import TotalAttention from './Components/TotalAttention/TotalAttention';
import { SexGraphic } from './Components/SexGraphic/SexGraphic';


const dashboard = () => {
  return (
    <div>
      <Section/>
      <br></br>
      <TotalAttention />
      <SexGraphic />
    </div>
  )
}
export default dashboard;