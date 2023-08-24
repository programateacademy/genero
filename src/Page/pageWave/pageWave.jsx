import React from 'react'
import MyBook from './Components/Books/MyBook'
import './styles.css'
import Card from './Components/Cards/Card'


const Page_Wave = () => {
  return (
    <div>

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
    </div>
  )
}

export default Page_Wave