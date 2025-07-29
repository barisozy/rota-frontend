import React from "react";


const About: React.FC = () => (
  <section className="py-20 px-4 bg-[var(--main-light)] w-full max-w-full" id="about">
    <div className="w-full max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-[var(--main-red)]">Hakkımızda</h2>
      <div className="bg-white rounded-lg shadow p-8 border border-[var(--main-gray)]">
        <p className="text-lg md:text-xl text-[var(--main-dark)] mb-2 font-semibold">15+ yıllık tecrübe ile motosiklet tutkunlarına en iyi hizmeti sunuyoruz.</p>
        <p className="text-base text-gray-700">Uzman ekibimiz, modern ekipmanlarımız ve müşteri odaklı yaklaşımımız ile güvenli sürüşler için yanınızdayız. Kalite, güven ve şeffaflık ilkelerimizle motosikletiniz emin ellerde.</p>
      </div>
    </div>
  </section>
);

export default About;
