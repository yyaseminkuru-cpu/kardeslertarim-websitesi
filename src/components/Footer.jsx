import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">
        
        {/* Sol Kısım: Telif Hakkı */}
        <div className="footer-left">
          <p>© 2026 Kardeşler Tarım. Tüm Hakları Saklıdır.</p>
          <p className="footer-credit"> Sevgiyle Tasarlanmıştır ❤️</p>
        </div>

        {/* Sağ Kısım: Geri Getirdiğimiz Adres ve İletişim Bilgileri */}
        <div className="footer-right">
          <h4>İletişim Bilgilerimiz</h4>
          <p>📍 <strong>Adres:</strong> Tabureli Mahallesi, Bozalan Sokak, No: 30/1A, ERDEMLİ / MERSİN</p>
          <p>📞 <strong>Telefon:</strong> +90 (535) 644 30 58</p>
          <p>✉️ <strong>E-Posta:</strong> mehmetkuru-1980@hotmail.com</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;