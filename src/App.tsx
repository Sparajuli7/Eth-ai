import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Stats from './components/Stats';
import VideoDemo from './components/VideoDemo';
import WhyDifferent from './components/WhyDifferent';
import WhatWeDo from './components/WhatWeDo';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Stats />
        <VideoDemo />
        <WhyDifferent />
        <WhatWeDo />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
