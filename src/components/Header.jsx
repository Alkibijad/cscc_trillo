import React from "react";
import Logo from "../img/logo.png";
import User from "../img/user.jpg"
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBookmarkFill, BsFillChatLeftTextFill } from "react-icons/bs";

function Header() {
  return (
    <div className="header" id="header">

      <img src={Logo} alt="logo" className="logo" />
      
      <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Search hotels"/>
        <button className="search__button">
          <AiOutlineSearch />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <BsFillBookmarkFill size={30}/>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <BsFillChatLeftTextFill size={30}/>
          <span className="user-nav__notification">10</span>
        </div>
        <div className="user-nav__user">
          <img src={User} alt="" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>

    </div>
  );
}

export default Header;
