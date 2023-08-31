import React from 'react';
import { useParams } from 'react-router-dom';
import MyBook from './Components/Books/MyBook';
import Card from '../pageWave/Components/Cards/Card';
import jsonData from '../../data.json';
import Footer from '../../Components/Footer';
import WaveAnimation from '../homePage/Components/Section/WaveAnimation'




const Page_Wave = () => {
  const { cardsProp, booksProp } = useParams();

  return (
    <div>
      <WaveAnimation/>
      <Card jsonArray={jsonData[cardsProp]} />
      <MyBook books={jsonData[booksProp]} />
      <Footer/>
    </div>
  );
}

export default Page_Wave;
