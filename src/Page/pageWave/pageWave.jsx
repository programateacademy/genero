import React from 'react';
import { useParams } from 'react-router-dom';
import MyBook from './Components/Books/MyBook';
import Card from '../pageWave/Components/Cards/Card';
import jsonData from '../../data.json';
import Footer from '../../Components/Footer';
import WaveAnimation from '../homePage/Components/Section/WaveAnimation';

const Page_Wave = () => {
  const { cardsProp, booksProp } = useParams();
  let waveTitle = ""; // Inicializa el título

  if (cardsProp === "Cards-First-Wave") {
    waveTitle = "OLEADA 1";
  } else if (cardsProp === "Cards-Second-Wave") {
    waveTitle = "OLEADA 2";
  } // Puedes agregar más condiciones según sea necesario

  return (
    <div>
      <WaveAnimation waveTitle={waveTitle} />
      <Card jsonArray={jsonData[cardsProp]} />
      <MyBook books={jsonData[booksProp]} />
      <Footer />
    </div>
  );
}

export default Page_Wave;

