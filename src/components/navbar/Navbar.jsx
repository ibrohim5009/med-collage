import React from 'react'
import NavbarTop from './NavbarTop'
import "../../css/navbar.css"

const Navbar = () => {
  return (
    <div>
      <NavbarTop />
      <div className="navbar">
        <div className="grid">
          <div className="logo">
            <p>LOGO</p>
            <h1>Buxoro Innovatsion Tibbiyot Texnikumi</h1>
          </div>
          <div className="items">
            <li>
              <a href="/">Bosh sahifa</a>
              <a href="/">TTA AKADMIK LITSEYI HAQIDA</a>
              <a href="/">Tuzilma</a>
              <a href="/">Yangiliklar</a>
              <a href="/">Oquv ishlari</a>
              <a href="/">Manaviy-Marifiy ishlar</a>
              <a href="/">Faoliyat</a>
              <a href="/">Interaktiv xizmatlar</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar