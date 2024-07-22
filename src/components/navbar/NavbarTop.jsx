import React from 'react'
import "../../css/navbarTop.css"
import { FaTelegram, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
const NavbarTop = () => {
  return (
    <div>
      <div className="main">
        <div className='flex'>
          <div className="title">
            <p>bukhoroinnovatsion@mail.ru</p>
            <p className='item'><LuSmartphone />+998910545009</p>
          </div>
          <div className="icon">
            <FaTelegram />
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop