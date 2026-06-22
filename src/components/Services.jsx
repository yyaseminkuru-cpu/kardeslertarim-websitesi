import "./Services.css";

function Services() {
  const hizmetler = [
    { id: 1, isim: "Toprak Analizi & Danışmanlık", detay: "Toprağınızdan numune alarak analiz ediyor, hangi gübrenin ve ürünün daha yüksek verim vereceğini bilimsel olarak belirliyoruz." },
    { id: 2, isim: "Reçeteli İlaçlama Desteği", detay: "Bitkilerinizdeki hastalıkları yerinde inceliyor, doğru zamanda doğru dozda zirai ilaçlama programı hazırlıyoruz." },
    { id: 3, isim: "Anahtar Teslim Bahçe Kurulumu", detay: "Meyve bahçesi veya tarla kurulumlarında, fidan seçiminden damlama sulama sistemine kadar tüm süreci yönetiyoruz." },
    { id: 4, isim: "Gübre Temini & Profesyonel Gübreleme Programı", detay: "Toprağınızın ve mahsulünüzün ihtiyacı olan en kaliteli gübre çeşitlerini eksiksiz temin ediyoruz. Sadece ürün sağlamakla kalmıyor; tarlanızdan maksimum verim ve en yüksek kaliteyi alabilmeniz için toprağın yapısına özel, doğru ve dengeli gübreleme programları hazırlayarak üretiminizin her aşamasında yanınızda oluyoruz." },
    { id: 5, isim: "Sertifikalı Sebze Fidesi & Meyve Fidanı Temini", detay: "Geleceğin bereketli hasatları güçlü köklerle başlar. Bölge iklimine ve toprak yapısına en uygun, hastalıklara dirençli, yüksek verimli her türlü sebze fideleri ile meyve ağacı fidanlarını sertifikalı ve güvenilir üreticilerden titizlikle temin ederek bahçelerinize ve seralarınıza ulaştırıyoruz." },
  ];

  return (
    <section className="premium-services" id="services">
      <div className="services-heading-area">
        <p className="services-pre-title">Neler Yapıyoruz?</p>
        <h2>Üreticimize Sunduğumuz Hizmetler</h2>
        <div className="services-divider">♡</div>
      </div>

      <div className="services-list-container">
        {hizmetler.map((hizmet, index) => (
          <div key={hizmet.id} className="service-row-item">
            {/* Numara kısmı görseldeki o asil havayı destekleyecek */}
            <div className="service-number">0{index + 1}</div>
            <div className="service-info-text">
              <h3>{hizmet.isim}</h3>
              <p>{hizmet.detay}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;