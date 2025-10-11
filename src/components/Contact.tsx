import { Mail, MessageSquare, Users, Building } from 'lucide-react';

const Contact = () => {
  return (
    <section id="waitlist" className="w-full py-32 px-10 border-t border-primary/20">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Waitlist
            </h2>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              Sign up for early access or reach out with questions. We'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-teal/10 border border-accent-teal/30">
                  <Mail className="w-6 h-6 text-accent-teal" />
                </div>
                <div>
                  <div className="text-sm text-text-gray mb-1">Email us directly</div>
                  <a 
                    href="mailto:hello@eth-ai.dev" 
                    className="text-lg text-white hover:text-accent-teal transition-colors"
                  >
                    hello@eth-ai.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <MessageSquare className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <div className="text-sm text-text-gray mb-1">Response time</div>
                  <div className="text-lg text-white">Within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-gold/10 border border-accent-gold/30">
                  <Building className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <div className="text-sm text-text-gray mb-1">Enterprise inquiries</div>
                  <div className="text-lg text-white">Custom demos available</div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="flex items-center gap-2 text-text-gray text-sm">
                <Users className="w-4 h-4" />
                <span>Trusted by engineering teams building with AI</span>
              </div>
            </div>
          </div>

          {/* Right side - Embedded Google Form (Shorter) */}
          <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-1 border border-primary/30 hover:border-primary/40 transition-all duration-300">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdu_8uy-AFC05q1ZXe0wllywAd5LxAHO6ZQMTtpZ46inW3cUw/viewform?embedded=true" 
              width="100%" 
              height="700" 
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Contact Form"
            >
              Loading form…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

