import React from 'react'
import ImageBook from './Components/Books/ImageBook'
import Description from './Components/Books/Description'
import Button from './Components/Books/Button'
import Visualization from './Components/Books/Visualization'

const Page_o = () => {
  return (
    <div>
      <ImageBook/>
      <Description/>
      <Button/>
      <Visualization/>
    </div>
  )
}

export default Page_o