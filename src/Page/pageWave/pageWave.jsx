import React from 'react'
import ImageBook from './Components/Books/ImageBook'
import Description from './Components/Books/Description'
import Button from './Components/Books/Button'
import MyBook from './Components/Books/MyBook'
import './style.css'

const Page_o = () => {
  return (
    <div>
      <ImageBook/>
      <Description/>
      <Button/>
      <MyBook/>
    </div>
  )
}

export default Page_o