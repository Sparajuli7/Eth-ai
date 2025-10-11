import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import VideoDemo from './components/VideoDemo';
import WhyDifferent from './components/WhyDifferent';
import WhatWeDo from './components/WhatWeDo';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <VideoDemo />
        <WhyDifferent />
        <WhatWeDo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
