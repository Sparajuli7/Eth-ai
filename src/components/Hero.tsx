import { Sparkles, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full pt-32 pb-24 px-10">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-teal/30 bg-accent-teal/10 mb-8">
            <Sparkles className="w-4 h-4 text-accent-teal" />
            <span className="text-sm font-semibold text-accent-teal">GitHub-First AI Security</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight">
            AI Governance That Lives in Your Repo
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-text-gray mb-10 max-w-3xl leading-relaxed">
            Discover every AI model in your code. Fix risks automatically. Generate audit-ready evidence in 10 minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
            >
              Join the Waitlist
            </a>
            <button
              className="px-8 py-4 bg-transparent border-2 border-text-gray hover:border-accent-teal text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-teal/30 hover:-translate-y-1 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

