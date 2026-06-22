import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <span className="logo-main">KARDEŞLER TARIM</span>
        <span className="logo-sub">TOPRAK VE BEREKET</span>
      </div>
      
      <div className="nav-links">
        <a href="#hero" className="nav-btn">Ana Sayfa</a>
        <a href="#about" className="nav-btn">Hakkımızda</a>
        <a href="#products" className="nav-btn">Ürün Gruplarımız</a>
        <a href="#services" className="nav-btn">Hizmetlerimiz</a>
        <a href="#contact" className="nav-btn-whatsapp">
          <span>💬</span> İletişim
        </a>
      </div>
    </nav>
  );
}

export default Navbar;