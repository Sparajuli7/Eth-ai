import { ArrowRight, Building2, AlertTriangle, Shield, CheckCircle, Sparkles } from 'lucide-react';

const Vision = () => {
  return (
    <section className="w-full py-32 px-10 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Your business uses AI. We make sure it's secure.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            {/* 1. Business + AI */}
            <div className="flex-1">
              <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                <Building2 className="w-12 h-12 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Your Business</h3>
                <p className="text-text-gray text-sm">Uses AI models in production code</p>
              </div>
            </div>

            <ArrowRight className="w-10 h-10 text-accent-teal/50 flex-shrink-0" />

            {/* 2. Risks Appear */}
            <div className="flex-1">
              <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300 text-center">
                <AlertTriangle className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Risks Emerge</h3>
                <p className="text-text-gray text-sm">Security vulnerabilities, compliance gaps, unapproved models</p>
              </div>
            </div>

            <ArrowRight className="w-10 h-10 text-accent-teal/50 flex-shrink-0" />

            {/* 3. Eth-AI Detects */}
            <div className="flex-1">
              <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-accent-teal/20 hover:border-accent-teal/40 transition-all duration-300 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Eth-AI Detects</h3>
                <p className="text-text-gray text-sm">Scans repos, flags issues, generates fixes</p>
              </div>
            </div>

            <ArrowRight className="w-10 h-10 text-accent-teal/50 flex-shrink-0" />

            {/* 4. Secure Business */}
            <div className="flex-1">
              <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                <CheckCircle className="w-12 h-12 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Secure & Compliant</h3>
                <p className="text-text-gray text-sm">Auto-fixed code, audit evidence, peace of mind</p>
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden space-y-6">
            {/* 1. Business + AI */}
            <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-primary/20 text-center">
              <Building2 className="w-12 h-12 text-primary-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Your Business</h3>
              <p className="text-text-gray">Uses AI models in production code</p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-10 h-10 text-accent-teal/50 rotate-90" />
            </div>

            {/* 2. Risks Appear */}
            <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-accent-gold/20 text-center">
              <AlertTriangle className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Risks Emerge</h3>
              <p className="text-text-gray">Security vulnerabilities, compliance gaps, unapproved models</p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-10 h-10 text-accent-teal/50 rotate-90" />
            </div>

            {/* 3. Eth-AI Detects */}
            <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-accent-teal/20 text-center">
              <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Eth-AI Detects</h3>
              <p className="text-text-gray">Scans repos, flags issues, generates fixes</p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-10 h-10 text-accent-teal/50 rotate-90" />
            </div>

            {/* 4. Secure Business */}
            <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-primary/20 text-center">
              <CheckCircle className="w-12 h-12 text-primary-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Secure & Compliant</h3>
              <p className="text-text-gray">Auto-fixed code, audit evidence, peace of mind</p>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-teal/30 bg-accent-teal/10">
              <Sparkles className="w-5 h-5 text-accent-teal" />
              <span className="text-accent-teal font-semibold">All automated, GitHub-native, zero infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

