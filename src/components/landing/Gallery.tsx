import React from "react";

const images = [
  "https://rotamotors.com.tr/gallery_gen/c71d717095a14c30faec2964bddc4e4a_992x558_fit.jpg?ts=1727218772",
  "https://rotamotors.com.tr/gallery_gen/01da9e8176c58b9e3a396602c264c319_600x800_fill.jpg",
  "https://rotamotors.com.tr/gallery_gen/5e64fad5ff344b88a0e559088f8cf8a9_600x450_fill.jpg",
  "https://rotamotors.com.tr/gallery_gen/8e28c1fd8349d499e6b74ed670a098a6_600x450_fill.jpg",
];

const Gallery: React.FC = () => (
  <section className="py-20 px-4 bg-white w-full max-w-full" id="gallery">
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight text-[var(--main-red)]">GALERİ</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-full">
        {images.map((src, i) => (
          <div key={i} className="bg-[var(--main-light)] border border-[var(--main-gray)] rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <img
              src={src}
              alt={`Referans ${i + 1}`}
              className="object-cover w-full h-40 md:h-48 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
