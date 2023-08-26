import React from 'react';
import { useParams } from 'react-router-dom';
import MyBook from './Components/Books/MyBook';
import Card from '../pageWave/Components/Cards/Card';
import jsonData from '../../data.json';

const Page_Wave = () => {
  const { cardsProp, booksProp } = useParams();

  return (
    <div>
<<<<<<< HEAD
      <Card jsonArray={jsonData[cardsProp]} />
      <MyBook books={jsonData[booksProp]} />
=======

      <div className="card-group">
        <Card 
          title="¿Quiénes son los locos del codigo?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg" />

        <Card 
        title="¿Quiénes lideran el movimiento Feminista Chicano?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg" />
      </div>

      <div className="card-group">

        <Card 
        title="¿Quiénes lideran el movimiento Feminista Chicano?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg" />

        <Card 
        title="¿Quiénes lideran el movimiento Feminista Chicano?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg" />

      </div>
    <MyBook/>
>>>>>>> 00e09a7f391c59a6315aed2d6738746ffb1c3592
    </div>
  );
}

export default Page_Wave;
