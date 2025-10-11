import { Sparkles } from 'lucide-react';

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
            Discover every AI model in your code. Fix risks automatically. Generate audit-ready evidence instantly.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdu_8uy-AFC05q1ZXe0wllywAd5LxAHO6ZQMTtpZ46inW3cUw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-primary hover:bg-primary-light text-white text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-1"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

