
import "./Contact.css";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Babanın WhatsApp Numarası (Kendi numaranızla güncelleyin)
    const babaNumber = "905356443058"; // Örnek: "905356443058" (ülke kodu dahil)

    // WhatsApp'ta alt alta düzenli görünecek metin şablonu
    const text = `🌱 *Kardeşler Tarım - İletişim Formu* %0A%0A` +
                 `👤 *Ad Soyad:* ${formData.name}%0A` +
                 `📞 *Telefon:* ${formData.phone}%0A` +
                 `💬 *mesajınız ve ihtiyacınız olan ürün:* ${formData.message}`;

    // WhatsApp Web veya Uygulamasına yönlendirme linki
    const whatsappUrl = `https://wa.me/${babaNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Bizimle İletişime Geçin</h2>
        
        <form onSubmit={handleWhatsAppSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Adınız Soyadınız" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="tel" 
            name="phone" 
            placeholder="Telefon Numaranız" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          
          
          <textarea 
            name="message" 
            placeholder="Mesajınız ve ihtiyacınız Olan Ürün" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
          
          <button type="submit" className="contact-submit-btn">
            WhatsApp ile Gönder ➔
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;