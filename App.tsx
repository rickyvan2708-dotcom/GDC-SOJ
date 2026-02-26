import { Navigation } from './components/Navigation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Facilities } from './sections/Facilities';
import { Residential } from './sections/Residential';
import { Features } from './sections/Features';
import { News } from './sections/News';
import { Footer } from './sections/Footer';

function App() {
  // Ganti nomor WhatsApp di sini
  const whatsappNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Facilities />
        <Residential />
        <Features />
        <News />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber={whatsappNumber}
        message="Halo, saya tertarik dengan Grand Duta City South of Jakarta. Bisa info lebih lanjut?"
      />
    </div>
  );
}

export default App;
