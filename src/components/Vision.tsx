import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Vision = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect GitHub',
      description: 'OAuth login in seconds. No installation required.',
    },
    {
      number: '02',
      title: 'Auto-Scan Repos',
      description: 'Discover every AI model, API call, and integration.',
    },
    {
      number: '03',
      title: 'Flag Risks',
      description: 'Detect unapproved models, PII leaks, and vulnerabilities.',
    },
    {
      number: '04',
      title: 'Auto-Fix PRs',
      description: 'One-click pull requests with code fixes and explanations.',
    },
    {
      number: '05',
      title: 'Generate Evidence',
      description: 'AI-BOM + compliance PDFs ready for audits in 10 minutes.',
    },
  ];

  return (
    <section className="w-full py-32 px-10 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            From code discovery to audit-ready evidence in 5 simple steps
          </p>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 flex-1">
              <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-6 border border-accent-teal/20 hover:border-accent-teal/40 transition-all duration-300 hover:-translate-y-1 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl font-bold text-accent-teal/40">
                    {step.number}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-accent-teal" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow between steps (except last one) */}
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 text-accent-teal/50 flex-shrink-0 mt-8" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical stack */}
        <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-6 border border-accent-teal/20 hover:border-accent-teal/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-5xl font-bold text-accent-teal/40">
                    {step.number}
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-accent-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Down arrow for mobile (except last one) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowRight className="w-8 h-8 text-accent-teal/50 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;

