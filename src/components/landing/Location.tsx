import React from "react";


const Location: React.FC = () => (
  <section className="py-20 px-4 bg-[var(--main-light)] w-full max-w-full" id="location">
    <div className="w-full max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-[var(--main-red)]">Konumumuz</h2>
      <div className="bg-white rounded-lg shadow p-4 border border-[var(--main-gray)]">
        <iframe
          title="Konum"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9731292095803!2d29.155802012223695!3d41.02584381822255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacedc58ba3527%3A0xcef8ac581e96accc!2sParseller%2C%20Filiz%20Sk.%20NO%3A6%2FA%2C%2034000%20%C3%9Cmraniye%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1753732975518!5m2!1sen!2str"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Location;
