import React from "react";


const Hero: React.FC = () => (
  <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[var(--main-dark)] overflow-hidden" id="hero" style={{zIndex:1}}>
    <div className="absolute inset-0 flex items-center justify-center w-full h-full">
      <img
        src="https://rotamotors.com.tr/gallery_gen/c71d717095a14c30faec2964bddc4e4a_992x558_fit.jpg?ts=1727218772"
        alt="Hero görseli"
        className="object-cover w-full h-full md:object-contain md:w-auto md:h-full rounded-none select-none pointer-events-none"
        draggable="false"
        style={{ opacity: 0.7 }}
        aria-hidden="true"
      />
    </div>
    <div className="relative z-10 w-full max-w-2xl mx-auto text-center text-white pt-15 md:pt-60 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
        ROTA MOTORS ile Yolda Kalmayın!
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
        Güvenilir, hızlı ve profesyonel motosiklet bakım & onarım hizmetleri. İstanbul'un her yerine servis!
      </p>
      <a
        href="#appointment"
        className="inline-block bg-[var(--main-red)] hover:bg-red-700 text-white font-bold py-3 px-10 rounded shadow-lg transition text-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-red)] focus:ring-offset-2 active:scale-95"
        style={{ color: 'white', transition: 'box-shadow 0.3s, background 0.3s, transform 0.3s' }}
        onClick={e => {
          e.preventDefault();
          const el = document.getElementById('appointment');
          if (el) {
            el.classList.add('fade-section');
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
              el.classList.remove('fade-section');
            }, 600);
          }
        }}
      >
        Randevu Al
      </a>
    </div>
  </section>
);

export default Hero;
