import React, { useState } from "react";
import RotaMotorsLogo from "../../../public/RotaMotorsTransparanLogo.png";

const navLinks = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hizmetler", href: "#services" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Galeri", href: "#gallery" },
  { label: "İletişim", href: "#contact" },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  e.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('fade-section');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      el.classList.remove('fade-section');
    }, 600);
  }
};

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#hero');
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setActive(href);
    scrollToSection(e, href);
  };
  return (
    <>
      {/* Sosyal ağ ikonları üst barı */}
      <div className="w-full bg-white flex items-center justify-end px-8 md:px-130" style={{ height: '38px', minHeight: '38px', maxHeight: '44px', zIndex: 60, position: 'relative' }}>
        <div className="flex gap-4 text-gray-700 text-lg">
          <a href="https://www.instagram.com/rotamotors2024/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--main-red)] transition"><i className="fab fa-instagram" style={{color:'darkgrey'}}></i></a>
          <a href="https://www.facebook.com/ebubekir.ozdemir.54535/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--main-red)] transition"><i className="fab fa-facebook" style={{color:'darkgrey'}}></i></a>
        </div>
      </div>
      <header className="sticky top-0 z-50 shadow-md border-b border-gray-200 bg-white">
        <nav className="w-full h-[64px] md:h-[74px] max-w-[1400px] mx-auto flex justify-center items-center relative">
          {/* Masaüstü: 30-70, Mobil: 50-50 bölünmüş menü */}
          <div className="flex w-[70vw] min-w-[340px] max-w-[900px] h-full mx-auto">
            {/* Sol taraf: Logo */}
            <div className="bg-white flex items-center justify-end pr-2 md:pr-20 h-full shadow-sm flex-[0_0_50%] md:flex-[0_0_30%]">
              <a href="#hero" className="flex items-center gap-2 ml-2 md:ml-6">
                <img src={RotaMotorsLogo} alt="Rota Motors Logo" className="h-48 w-auto object-contain" />
              </a>
            </div>
            {/* Sağ taraf: Menü */}
            <div
              className="flex-[0_0_50%] md:flex-[0_0_70%] flex items-center justify-start pl-4 md:pl-40 h-full shadow-sm relative bg-[var(--main-red)]"
              style={{ height: '100.7%' }}
            >
              <div className="hidden md:flex items-center w-full">
                <ul className="flex gap-6 w-full justify-start font-bold text-lg">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`px-5 py-2 rounded transition-colors duration-200 text-white hover:bg-white/20 ${active === link.href ? 'bg-white/20' : ''}`}
                        onClick={e => handleNav(e, link.href)}
                        style={{ color: 'white' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Mobil menü butonu */}
              <button
                className="md:hidden absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-white bg-[var(--main-red)] shadow"
                onClick={() => setOpen((v) => !v)}
                aria-label="Menüyü Aç/Kapat"
                style={{ color: 'white' }}
              >
                <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-[var(--main-red)] border-t border-gray-200 animate-fade-in-down">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 px-2 rounded font-semibold text-white ${active === link.href ? 'bg-white/20' : ''} hover:bg-white/10`}
                  onClick={e => {
                    handleNav(e, link.href);
                    setOpen(false);
                  }}
                  style={{ color: 'white' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
};

export default Menu;
