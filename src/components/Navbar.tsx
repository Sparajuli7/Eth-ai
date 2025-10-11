import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-content mx-auto px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-white">AI Governance</span>
        </div>
        
        <a
          href="#waitlist"
          className="px-6 py-2.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

