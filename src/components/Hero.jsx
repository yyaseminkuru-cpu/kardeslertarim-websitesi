import "./Hero.css";

function Hero() {
  return (
    <section className="hero-premium" id="hero">
      <div className="hero-blur-effect"></div>
      <div className="hero-content">
        <p className="hero-subtitle">20 Yıldır Sevgi ve Tecrübeyle...</p>
        <h1 className="hero-title">Toprağın Bereketini<br />Geleceğe Taşıyoruz</h1>
        <p className="hero-description">
          Anadolu'nun bereketli topraklarında, 20 yıldır aynı dürüstlük ve özenle, 
          üreticilerimizin en kaliteli tarım çözümleriyle yanındayız.
        </p>
        <a href="#about" className="hero-about-btn">
  Hakkımızda ➔
</a>
      </div>

      {/* Görseldeki 4'lü Önemli Özellik Şeridi */}
      <div className="info-ribbon">
        <div className="ribbon-item">🌾 <span>20 Yıllık Tecrübe</span></div>
        <div className="ribbon-item">🌱 <span>Sertifikalı Ürünler</span></div>
        <div className="ribbon-item">🤝 <span>Güvenilir Çözümler</span></div>
      </div>
    </section>
  );
}

export default Hero;