import React from "react";


const services = [
  {
    title: "Bakım & Onarım",
    desc: "Her marka ve model motosiklet için periyodik bakım ve tamir hizmetleri.",
    icon: "🛠️"
  },
  {
    title: "Yedek Parça",
    desc: "Orijinal ve kaliteli yedek parça temini ve montajı.",
    icon: "🔩"
  },
  {
    title: "Lastik Değişimi",
    desc: "Hızlı ve güvenli lastik değişimi, balans ayarı.",
    icon: "🏍️"
  },
  {
    title: "Yol Yardım",
    desc: "Acil durumlarda yerinde yol yardım ve çekici hizmeti.",
    icon: "🚨"
  },
];


const Services: React.FC = () => (
  <section className="py-20 px-4 bg-[var(--main-light)] w-full max-w-full" id="services">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight w-full max-w-full text-[var(--main-red)]">
      Hizmetlerimiz
    </h2>
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center border border-[var(--main-gray)] hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-lg font-bold mb-2 text-[var(--main-red)] uppercase">{service.title}</h3>
          <p className="text-gray-700 text-base">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
