import React from "react";
import { AiFillHome, AiFillCar } from "react-icons/ai";
import { ImAirplane } from "react-icons/im";
import { BsMap } from "react-icons/bs";


function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__nav">
        <li className="sidebar__nav--link"><AiFillHome /><a href="#">HOTEL</a></li>
        <li className="sidebar__nav--link"><ImAirplane /><a href="#">FLIGHT</a></li>
        <li className="sidebar__nav--link"><AiFillCar /><a href="#">CAR RENTAL</a></li>
        <li className="sidebar__nav--link"><BsMap /><a href="#">TOURS</a></li> </ul> 
          <footer className="footer"> &copy; by trillo. All rights reserved</footer>
    </div>
  );
}

export default Sidebar;
