import "./About.css";

function About() {
  return (
    <section className="premium-about" id="about">
      <div className="about-grid-container">
        
        {/* Sol Taraf: Amblem alanı */}
        <div className="about-visual-area">
          <div className="visual-square-box">
            {/* Logo artık public klasöründen doğrudan ve hatasız geliyor */}
            <img src="/2.png" alt="Kardeşler Tarım Kurumsal" className="about-logo-inside" />
          </div>
        
        </div>

       <div className="about-text-area">
  <p className="hero-subtitle">Kardeşler Tarım'ın Hikayesi</p>
  <h2>Toprağın Bereketini<br />Yarınlara Taşıyoruz</h2>
  <div className="about-line-divider"></div>
  
  <p className="about-paragraph">
    <strong>Mehmet KURU</strong>, 2001 yılında Çukurova Üniversitesi Ziraat Fakültesi'nden 
    başarıyla mezun olmasının ardından, edindiği akademik birikimi sahaya taşımak amacıyla 
    2002 yılında <strong>Kardeşler Tarım</strong> işletmesini kurdu.
  </p>
  
  <p className="about-paragraph">
    Çeyrek asra yaklaşan köklü tecrübemiz ve toprağa olan sarsılmaz sevgimizle, Anadolu üreticisinin 
    en güvenilir yol arkadaşı olmak için çalışıyoruz. Sadece ürün satışı yapmıyor; çiftçimizin tarlasından 
    en yüksek verimi alması için doğru uzmanlık ve çözümler üretiyoruz.
  </p>
  
  <p className="about-paragraph">
    Dürüstlük, yüksek kalite ve mutlak güven ilkeleri üzerine kurulu işletmemiz, modern tarım 
    teknolojilerini geleneksel tecrübeyle harmanlayarak geleceğin tarımına yön vermeye devam ediyor.
  </p>
</div>

      </div>
    </section>
  );
}

export default About;