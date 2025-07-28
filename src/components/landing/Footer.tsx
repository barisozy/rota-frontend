import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-[var(--main-dark)] text-white py-8 mt-12 border-t border-[var(--main-gray)]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <div className="text-lg font-bold tracking-wide uppercase">ROTA MOTORS</div>
      <div className="text-sm text-gray-300">© 2025 ROTA MOTORS. Tüm hakları saklıdır.</div>
    </div>
  </footer>
);

export default Footer;
