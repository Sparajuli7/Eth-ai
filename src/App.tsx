import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Stats from './components/Stats';
import VideoDemo from './components/VideoDemo';
import WhatWeDo from './components/WhatWeDo';
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
        <WhatWeDo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
