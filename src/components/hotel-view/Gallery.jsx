import React from 'react'
import img1 from "../../img/hotel-1.jpg"
import img2 from "../../img/hotel-2.jpg"
import img3 from "../../img/hotel-3.jpg"

function Gallery() {
  return (
      <div className='gallery'>
          <img src={ img1} alt="" />
          <img src={ img2} alt="" />
          <img src={ img3} alt="" />
    </div>
  )
}

export default Gallery