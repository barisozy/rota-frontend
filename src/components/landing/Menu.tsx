import React, { useState, useEffect, useCallback } from "react";
import RotaMotorsLogo from "../../../public/RotaMotorsLogo.png";

const navLinks = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hizmetler", href: "#services" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Galeri", href: "#gallery" },
  { label: "İletişim", href: "#contact" },
];

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Scroll ile aktif bölümü belirleme
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // İlk yüklemede çalıştır

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bölüme kaydırma fonksiyonu
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const socialBar = document.getElementById("social-bar");
    const siteHeader = document.getElementById("site-header");
    const headerHeight = (socialBar?.offsetHeight || 0) + (siteHeader?.offsetHeight || 0);

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Görsel feedback
    element.classList.add("fade-section");
    setTimeout(() => element.classList.remove("fade-section"), 600);
  }, []);

  // Navigasyon işlemini yöneten fonksiyon
  const handleNavigation = useCallback((href: string) => {
    setIsMenuOpen(false);
    setActiveSection(href);
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  }, [scrollToSection]);

  return (
    <>
      {/* Sosyal medya barı */}
      <div
        id="social-bar"
        className="w-full bg-white flex items-center justify-end px-8 md:px-130"
        style={{ height: "38px", minHeight: "38px", maxHeight: "44px", zIndex: 60, position: "relative" }}
      >
        <div className="flex gap-4 text-gray-700 text-lg">
          <a href="https://www.instagram.com/rotamotors2024/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--main-red)] transition">
            <i className="fab fa-instagram" style={{ color: "darkgray" }}></i>
          </a>
          <a href="https://www.facebook.com/ebubekir.ozdemir.54535/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--main-red)] transition">
            <i className="fab fa-facebook" style={{ color: "darkgray" }}></i>
          </a>
        </div>
      </div>

      {/* Ana header */}
      <header id="site-header" className="sticky top-0 z-50 shadow-md border-b border-gray-200 bg-white">
        <nav className="w-full h-[64px] md:h-[74px] max-w-[1400px] mx-auto flex justify-center items-center relative">
          <div className="flex w-[70vw] min-w-[340px] max-w-[900px] h-full mx-auto">
            {/* Logo */}
            <div className="bg-white flex items-center justify-end pr-2 md:pr-20 h-full shadow-sm flex-[0_0_50%] md:flex-[0_0_30%]">
              <button
                type="button"
                onClick={() => handleNavigation("#hero")}
                className="logo-button flex items-center gap-2 ml-0 md:ml-0 pt-12 focus:outline-none"
              >
                <img src={RotaMotorsLogo} alt="Rota Motors Logo" className="h-10 w-auto md:h-10 w-auto lg:h-20 w-auto mt-0" />
              </button>
            </div>

            {/* Masaüstü Menü */}
            <div
              className="flex-[0_0_50%] md:flex-[0_0_70%] flex items-center justify-start pl-4 md:pl-40 h-full shadow-sm relative bg-[var(--main-red)]"
              style={{ height: "100.7%" }}
            >
              <div className="hidden md:flex items-center w-full">
                <ul className="flex gap-6 w-full justify-start font-bold text-lg">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        type="button"
                        onClick={() => handleNavigation(link.href)}
                        className={`menu-button relative px-5 py-2 rounded font-semibold text-white transition-colors duration-200
  hover:bg-white/20 focus:outline-none focus:ring-0 border-0 focus:border-0
  ${activeSection === link.href
                            ? "after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-white after:rounded"
                            : ""
                          }`}


                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobil menü butonu */}
              <button
                type="button"
                className="menu-icon-button md:hidden absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-white bg-[var(--main-red)] shadow"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menüyü Aç/Kapat"
              >
                <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--main-red)] border-t border-gray-200 animate-fade-in-down">
            <ul className="flex flex-col gap-2 px-6 pb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavigation(link.href)}
                     className={`menu-button relative px-5 py-2 rounded font-semibold text-white transition-colors duration-200
  hover:bg-white/20 focus:outline-none focus:ring-0 border-0 focus:border-0
  ${activeSection === link.href
                            ? "after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-white after:rounded"
                            : ""
                          }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Menu;