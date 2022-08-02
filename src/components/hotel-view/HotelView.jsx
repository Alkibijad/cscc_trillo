import React from "react";
import AboutHotel from "./AboutHotel";
import Gallery from "./Gallery";
import HotelDetails from "./HotelDetails";
import Review from "./Review";

function HotelView() {
  return (
    <main className="hotel-view">
        <Gallery />
      <HotelDetails />
      

      <div className="about_and_rating">
        <AboutHotel />
        <Review/>
      </div>
    </main>
  );
}

export default HotelView;
