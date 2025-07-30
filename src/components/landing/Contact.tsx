import React from "react";


const Contact: React.FC = () => (
  <section className="py-20 px-4 bg-white w-full max-w-full" id="contact">
    <div className="w-full max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-[var(--main-red)]">İletişim</h2>
      <div className="bg-[var(--main-light)] rounded-lg shadow p-8 border border-[var(--main-gray)]">
        <div className="mb-4">
          <span className="block text-base text-[var(--main-dark)] font-semibold mb-1">Adres</span>
          <span className="text-gray-700">Parseller Mahallesi Filiz Sokak no: 6/A Ümraniye/İstanbul</span>
        </div>
        <div className="mb-4">
          <span className="block text-base text-[var(--main-dark)] font-semibold mb-1">Telefon</span>
          <a href="tel:+905435270397" className="text-[var(--main-red)] font-bold hover:underline">+90 543 527 0397</a>
        </div>
        <div>
          <span className="block text-base text-[var(--main-dark)] font-semibold mb-1">E-Posta</span>
          <a href="mailto:motorsrota06@gmail.com" className="text-[var(--main-red)] font-bold hover:underline">motorsrota06@gmail.com</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
