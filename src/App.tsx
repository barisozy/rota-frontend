// src/App.tsx


import Menu from './components/landing/Menu';
import Hero from './components/landing/Hero';
import Services from './components/landing/Services';
import About from './components/landing/About';
import Gallery from './components/landing/Gallery';
import AppointmentForm from './components/landing/AppointmentForm';
import Contact from './components/landing/Contact';
import Location from './components/landing/Location';
import Footer from './components/landing/Footer';


function App() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen w-full">
      <Menu />
      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="about"><About /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact" className="py-20 px-4 bg-white w-full max-w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 min-w-[320px] bg-[var(--main-light)] rounded-lg shadow p-8 border border-[var(--main-gray)] flex items-center">
            <AppointmentForm />
          </div>
          <div className="flex-1 min-w-[320px] bg-[var(--main-light)] rounded-lg shadow p-8 border border-[var(--main-gray)] flex items-center">
            <Contact />
          </div>
          <div className="flex-1 min-w-[320px] bg-[var(--main-light)] rounded-lg shadow p-4 border border-[var(--main-gray)] flex items-center">
            <Location />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;