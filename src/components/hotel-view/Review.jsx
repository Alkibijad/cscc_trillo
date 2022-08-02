import React from 'react'
import userImg1 from "../../img/user-1.jpg"
import userImg2 from "../../img/user-2.jpg"
import userImg3 from "../../img/user-3.jpg"

function Review() {
  return (
      <div className='reviews'>
          <div className="reviews-user">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.</p>
              <div className="reviews-user__info">
                  <img src={ userImg1} alt="" />
                  <div className="user-details">
                      <h4 className="name">Nick Smith</h4>
                      <p className='date'>Feb 23rd. 2021</p>
                  </div>
                    <p className='user-rating'>7</p>
              </div>
          </div>
          <div className="reviews-user">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.!</p>
              <div className="reviews-user__info">
                  <img src={ userImg2} alt="" />
                  <div className="user-details">
                      <h4 className="name">Mary Thomas</h4>
                      <p className='date'>Feb 23rd. 2021</p>
                  </div>
                    <p className='user-rating'>10</p>
              </div>
          </div>
          <div className="reviews-user">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.!</p>
              <div className="reviews-user__info">
                  <img src={ userImg3} alt="" />
                  <div className="user-details">
                      <h4 className="name">John Doe</h4>
                      <p className='date'>Feb 23rd. 2021</p>
                  </div>
                    <p className='user-rating'>8</p>
              </div>
          </div>
   
    </div>
  )
}

export default Review