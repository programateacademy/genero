import React from 'react';
import { useParams } from 'react-router-dom';
import MyBook from './Components/Books/MyBook';
import Card from '../pageWave/Components/Cards/Card';
import jsonData from '../../data.json';

const Page_Wave = () => {
  const { cardsProp, booksProp } = useParams();

  return (
    <div>
      <Card jsonArray={jsonData[cardsProp]} />
      <MyBook books={jsonData[booksProp]} />
    </div>
  );
}

export default Page_Wave;
