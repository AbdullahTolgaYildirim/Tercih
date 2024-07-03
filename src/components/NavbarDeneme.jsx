import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'
const NavbarDeneme = () => {
  return (
    <div>
      <div className='NavbarContainer'>
        
        <div className='navbarItem'>
          <div className='logo'>
            <img src="/images/logo1.png" alt="Logo" />
          </div>
        <Link to="/"> Anasayfa</Link>
        <Link to="/tabanpuan">Taban Puanları</Link>
        <Link to="/dgs"> Üniversiteler</Link>
        <Link to="/tercihrehberi"> Tercih Rehberi </Link>
        <Link to="/lgs"> Yks Konular</Link>
        <Link to="/calculater"> Puan Hesaplayıcı </Link>
        <Link to="/Ai"> Tercih Yardımcısı </Link>
        <Link to="/iletisim"> İletişim</Link>
        <Link to="/Login"> Login</Link>

        </div>
      </div>
      
    </div>
  )
}

export default NavbarDeneme;