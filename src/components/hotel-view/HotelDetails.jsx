import React from 'react'
import { AiFillStar} from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"

function HotelDetails() {
  return (
      <div className='hotel-details'>
          <div className="hotel-name-stars">
              <h1>HOTEL LAS PALMAS</h1>
              <div className="hotel__starts">
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
              </div>
          </div>
          <div className="hotel-location-rate">
              <MdLocationOn />
              <p>Albufeira, Portugal</p>
              <div className="rate">
                  <p className='num'>8.6</p>
                  <p className="votes">436 votes</p>
              </div>
          </div>
    </div>
  )
}

export default HotelDetails