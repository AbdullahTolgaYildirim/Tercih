import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşeni import edilir
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com">
          <img src="/images/instagram.png" alt="Instagram" />
        </a>
        {/* Diğer sosyal medya logoları için aynı yapıyı kullanabilirsiniz */}
      </div>
      <div className="policy-links">
        <Link to="/Privacy">Gizlilik Politikası</Link>
        <Link to="/Cerezler">Çerez Politikası</Link>
      </div>
      <p>&copy; 2024 CREATE BY MOCKINGBIRDS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

