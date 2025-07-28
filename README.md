# Rotamotors Dashboard

A modern, fast, and mobile-friendly web interface for a corporate motorcycle maintenance and repair service.

## Features
- **Single Page Application (SPA)**: Built with React + TypeScript for a fast and smooth user experience
- **Responsive Design**: Perfect appearance on all devices (TailwindCSS)
- **Corporate Menu**: Social bar, sticky header, dynamic and mobile-friendly menu
- **Hero Section**: Impressive headline, call-to-action button, and motorcycle-themed background
- **Services**: All offered services listed with modern cards
- **About Us**: Company vision and experience
- **Gallery**: Real service and motorcycle photos as references
- **Appointment Form**: User-friendly, validated, and animated application form
- **Contact & Location**: All contact information and map integration
- **User Experience**: Animations, effects, and fast transitions

## Getting Started
1. **Requirements**
   - Node.js 18+
   - npm or yarn
2. **Clone the repository**
   ```sh
   git clone https://github.com/barisozy/rota-frontend
   cd rotam-dashboard
   ```
3. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
4. **Start the development server**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. **View the project in your browser**
   - [http://localhost:5173](http://localhost:5173)

## Technologies Used
- [React](https://react.dev/) (TypeScript)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/) (for icons)

## Folder Structure
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

## Customization
- **Colors**: Easily change corporate colors via `tailwind.config.js` and CSS variables.
- **Photos**: Update images in `src/components/landing/Gallery.tsx` and `Hero.tsx`.
- **Social Media**: Update social links in the menu top bar.

## Contributing
You can contribute by opening pull requests and issues.

## License
MIT
