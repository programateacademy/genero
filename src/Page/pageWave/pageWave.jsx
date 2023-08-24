import React from 'react'
import MyBook from './Components/Books/MyBook'
import './styles_page.css'
import Card from '../pageWave/Components/Cards/Card';
import jsonData from '../../data.json';


const Page_Wave = (props) => {
  return (
    <div>
      <Card jsonArray={jsonData["Cards-Second-Wave"]} arrayName="Cards-First-Wave"/>
      <MyBook/>
    </div>
  )
}

export default Page_Wave