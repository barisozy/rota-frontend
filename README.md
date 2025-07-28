# Rotamotors Dashboard

Kurumsal motosiklet bakım ve onarım servisi için modern, hızlı ve mobil uyumlu bir web arayüzü.

## Özellikler
- **Tek sayfa uygulama (SPA)**: React + TypeScript ile geliştirilmiş, hızlı ve akıcı kullanıcı deneyimi
- **Responsive Tasarım**: Tüm cihazlarda kusursuz görünüm (TailwindCSS)
- **Kurumsal Menü**: Sosyal bar, sticky header, dinamik ve mobil uyumlu menü
- **Hero Bölümü**: Etkileyici başlık, çağrı butonu ve motosiklet temalı arka plan
- **Hizmetler**: Sunulan tüm servislerin modern kartlarla listelenmesi
- **Hakkımızda**: Firma vizyonu ve tecrübesi
- **Galeri**: Gerçek servis ve motosiklet görselleriyle referanslar
- **Randevu Formu**: Kullanıcı dostu, validasyonlu ve efektli başvuru formu
- **İletişim & Konum**: Tüm iletişim bilgileri ve harita entegrasyonu
- **Kullanıcı Deneyimi**: Animasyonlar, efektler ve hızlı geçişler

## Kurulum
1. **Gereksinimler**
   - Node.js 18+
   - npm veya yarn
2. **Projeyi klonlayın**
   ```sh
   git clone <repo-url>
   cd rotam-dashboard
   ```
3. **Bağımlılıkları yükleyin**
   ```sh
   npm install
   # veya
   yarn install
   ```
4. **Geliştirme sunucusunu başlatın**
   ```sh
   npm run dev
   # veya
   yarn dev
   ```
5. **Projeyi tarayıcıda görüntüleyin**
   - [http://localhost:5173](http://localhost:5173)

## Kullanılan Teknolojiler
- [React](https://react.dev/) (TypeScript)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/) (ikonlar için)

## Klasör Yapısı
```
rotam-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── landing/
│   ├── dashboard/
│   ├── hooks/
│   └── lib/
├── index.html
├── package.json
├── tailwind.config.js
└── ...
```

## Özelleştirme
- **Renkler**: `tailwind.config.js` ve CSS değişkenleri ile kurumsal renkler kolayca değiştirilebilir.
- **Fotoğraflar**: `src/components/landing/Gallery.tsx` ve `Hero.tsx` dosyalarındaki görselleri güncelleyebilirsiniz.
- **Sosyal Medya**: Menü üst barındaki sosyal linkleri güncelleyebilirsiniz.

## Katkı
Pull request ve issue açarak katkıda bulunabilirsiniz.

## Lisans
MIT
