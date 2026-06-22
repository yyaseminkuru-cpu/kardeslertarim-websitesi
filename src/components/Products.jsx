import "./Products.css";

function Products() {
  const urunler = [
   { id: 1, isim: "Kaliteli Tohumlar", ikon: "🌾", aciklama: "Yüksek çimlenme oranına sahip, verimli ve sertifikalı tohum çeşitleri." },
    { id: 2, isim: "Organik & Kimyasal Gübreler", ikon: "🌿", aciklama: "Toprağınızın besin değerini ve ürün verimliliğini artıracak gübre seçenekleri." },
    { id: 3, isim: "Zirai İlaçlar", ikon: "🛡️", aciklama: "Bitkilerinizi hastalıklardan ve zararlılardan koruyacak güvenli çözümler." },
    { id: 4, isim: "Fide", ikon: "🌱", aciklama: "Mevsimlik çeşitli fide seçenekleri." },
  ];

  return (
    <section className="premium-products" id="products">
      <div className="products-heading-area">
        <h2>Güvenle Sunulanlar</h2>
        <div className="heading-divider">♡</div>
      </div>

      <div className="premium-grid">
        {urunler.map((urun) => (
          <div key={urun.id} className="premium-card">
            <div className="card-image-placeholder">
              <span className="card-huge-icon">{urun.ikon}</span>
            </div>
            
            <div className="card-info">
              <h3>{urun.isim}</h3>
              <p className="card-desc">{urun.aciklama}</p>
              <p className="card-subtext">Bilgi ve Sipariş İçin</p>
              
              <a href="https://wa.me/905356443058" target="_blank" rel="noreferrer" className="card-wa-btn">
                <span>💬</span> WhatsApp ile Sor
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;