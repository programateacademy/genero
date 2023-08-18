import React from 'react'
import ImageBook from './Components/Books/ImageBook'
import Description from './Components/Books/Description'
import Button from './Components/Books/Button'
import Visualization from './Components/Books/Visualization'
import Card from './Components/Cards'


const Page_o = () => {
  return (
    <div>
      <ImageBook />
      <Description />
      <Button />
      <Visualization />

      <div className="card-group">

        <Card title="¿Quiénes lideran el movimiento Feminista Chicano?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg"/>

        <Card title="¿Quiénes lideran el movimiento Feminista Chicano?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg"/>
      </div>

      <div className="card-group">
        
        <Card title="¿Quiénes lideran el movimiento Feminista Chicano?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg"/>

        <Card title="¿Quiénes lideran el movimiento Feminista Chicano?"
          description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
          imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg"/>

      </div>

    </div>
  )
}

export default Page_o