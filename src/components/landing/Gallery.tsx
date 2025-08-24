import React, { useCallback, useEffect, useId, useRef, useState } from "react";

type GalleryProps = {
  images?: string[];
  startIndex?: number;
  keyboard?: boolean;
  preloadNeighbors?: boolean;
};

const DEFAULT_IMAGES = [
  "https://rotamotors.com.tr/gallery_gen/c71d717095a14c30faec2964bddc4e4a_992x558_fit.jpg?ts=1727218772",
  "https://rotamotors.com.tr/gallery_gen/01da9e8176c58b9e3a396602c264c319_600x800_fill.jpg",
  "https://rotamotors.com.tr/gallery_gen/5e64fad5ff344b88a0e559088f8cf8a9_600x450_fill.jpg",
  "https://rotamotors.com.tr/gallery_gen/8e28c1fd8349d499e6b74ed670a098a6_600x450_fill.jpg",
];

export default function Gallery({
  images = DEFAULT_IMAGES,
  startIndex = 0,
  keyboard = true,
  preloadNeighbors = true,
}: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false); // modal aç/kapa animasyonu
  const [index, setIndex] = useState<number>(() =>
    Math.max(0, Math.min(startIndex, images.length - 1))
  );
  const [fadeIndex, setFadeIndex] = useState(index); // görsel fade animasyonu
  const modalId = useId();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // touch
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  // body lock
  const lockBodyScroll = useCallback(() => {
    if (typeof document === "undefined") return;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;
  }, []);
  const unlockBodyScroll = useCallback(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  // preload neighbors
  useEffect(() => {
    if (!preloadNeighbors || images.length <= 1) return;
    const prev = (index - 1 + images.length) % images.length;
    const next = (index + 1) % images.length;
    const imgs: HTMLImageElement[] = [];
    [prev, next].forEach((i) => {
      const img = new Image();
      img.src = images[i];
      imgs.push(img);
    });
    return () => imgs.forEach((i) => (i.src = ""));
  }, [index, images, preloadNeighbors]);

  const openAt = useCallback(
    (i: number) => {
      lastFocusedElement.current = (document.activeElement as HTMLElement) || null;
      setIndex(i);
      setFadeIndex(i);
      setOpen(true);
      setTimeout(() => {
        setAnimate(true);
        lockBodyScroll();
      }, 10);
    },
    [lockBodyScroll]
  );

  const close = useCallback(() => {
    setAnimate(false);
    unlockBodyScroll();
    setTimeout(() => {
      setOpen(false);
      lastFocusedElement.current?.focus();
    }, 300);
  }, [unlockBodyScroll]);

  const prev = useCallback(() => {
    const newIndex = (index - 1 + images.length) % images.length;
    setIndex(newIndex);
    setFadeIndex(newIndex);
  }, [index, images.length]);

  const next = useCallback(() => {
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
    setFadeIndex(newIndex);
  }, [index, images.length]);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) close();
    },
    [close]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (!keyboard) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    setTimeout(() => {
      (containerRef.current?.querySelector<HTMLElement>(
        "button, [tabindex], a"
      ) || containerRef.current)?.focus();
    }, 0);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, keyboard, close, next, prev]);

  // touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const dx = touchDeltaX.current;
    const threshold = 50;
    if (dx < -threshold) next();
    else if (dx > threshold) prev();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const getAlt = (src: string, i: number) => {
    try {
      const u = new URL(src);
      return `Galeri görseli ${i + 1} — ${u.pathname.split("/").pop() ?? ""}`;
    } catch {
      return `Galeri görseli ${i + 1}`;
    }
  };

  return (
    <section
      className="py-20 px-4 bg-white w-full max-w-full"
      id="gallery"
      aria-labelledby={`${modalId}-title`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2
          id={`${modalId}-title`}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight text-[var(--main-red)]"
        >
          Galeri
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-full">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => openAt(i)}
              className="gallery-button bg-white border border-[var(--main-gray)] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-0"
            >
              <img
                src={src}
                alt={getAlt(src, i)}
                className="object-cover w-full h-40 md:h-48 hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          ref={overlayRef}
          onClick={onOverlayClick}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-modal="true"
          role="dialog"
          aria-labelledby={`${modalId}-title`}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={containerRef}
            className={`relative w-full max-w-[1100px] mx-auto outline-none h-[80vh] md:h-[90vh] flex items-center justify-center transform transition-all duration-300 ${
              animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            tabIndex={-1}
          >
            {/* IMAGE */}
            <div className="max-h-full w-full flex items-center justify-center pointer-events-none">
              <img
                key={fadeIndex}
                src={images[fadeIndex]}
                alt={getAlt(images[fadeIndex], fadeIndex)}
                className="max-h-[76vh] md:max-h-[86vh] w-auto max-w-full object-contain rounded-md shadow-lg transition-opacity duration-300 pointer-events-auto opacity-0 animate-fadeIn"
                draggable={false}
              />
            </div>

            {/* BUTTONS */}
            <button
              type="button"
              onClick={prev}
              aria-label="Önceki"
              className="gallery-window-button absolute left-4 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center
                         w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--main-red)] text-white hover:bg-red-600 transition
                         focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span className="relative -top-1 text-2xl md:text-3xl leading-none select-none">‹</span>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Sonraki"
              className="gallery-window-button absolute right-4 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center
                         w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--main-red)] text-white hover:bg-red-600 transition
                         focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span className="relative -top-1 text-2xl md:text-3xl leading-none select-none">›</span>
            </button>

            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="gallery-window-button absolute right-4 top-4 z-40 p-2 rounded-full bg-[var(--main-red)] text-white hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              ✕
            </button>

            <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 z-40">
              <div className="text-sm text-white bg-[var(--main-red)]/90 px-2 py-1 rounded">
                {index + 1} / {images.length}
              </div>
            </div>

            {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 z-40 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIndex(i); setFadeIndex(i); }}
                  type="button"
                  aria-label={`Görsele git ${i + 1}`}
                  className={`counter-img w-4 h-1 md:w-4 md:h-1 rounded-full transition-all duration-200 ease-out ${
                    i === index ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
}
