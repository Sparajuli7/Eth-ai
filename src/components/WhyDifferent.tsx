import { Zap, Target, Rocket, Beaker, Package, Briefcase } from 'lucide-react';

const WhyDifferent = () => {
  const cards = [
    {
      icon: Zap,
      title: 'We Live Where Your Code Lives',
      description: 'While ',
      competitor: 'Lakera/CalypsoAI',
      description2: ' deploy runtime firewalls that catch problems in production, we fix them at the source—in your GitHub repository before they ship.',
    },
    {
      icon: Target,
      title: 'AI-Specific, Not Generic Secrets',
      description: '',
      competitor: 'GitHub Advanced Security',
      description2: ' scans for API keys and generic secrets, but we detect AI-specific risks like hardcoded model IDs, unvalidated prompts, and direct third-party model calls.',
    },
    {
      icon: Rocket,
      title: 'Day-1 Value for Engineers',
      description: 'Unlike ',
      competitor: 'BigID',
      description2: ' that require months of enterprise deployment, we deliver instant value through GitHub Actions—no infrastructure, no procurement cycle.',
    },
    {
      icon: Beaker,
      title: 'Code Fixes, Not Just Testing',
      description: '',
      competitor: 'Robust Intelligence',
      description2: ' tests model outputs in sandboxes. We go further: auto-generating code fixes with explanations so engineers can resolve issues immediately.',
    },
    {
      icon: Package,
      title: 'From Code to Audit in Minutes',
      description: '',
      competitor: 'Protect AI',
      description2: ' focuses on model scanning, but we generate audit-ready AI-BOM and compliance evidence directly from your codebase in under 10 minutes.',
    },
    {
      icon: Briefcase,
      title: 'Lightweight & GitHub-Native',
      description: 'Skip the heavyweight enterprise platforms like ',
      competitor: 'CalypsoAI/F5',
      description2: '—we integrate seamlessly with GitHub without requiring dedicated infrastructure or complex deployments.',
    },
  ];

  return (
    <section className="w-full py-32 px-10">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why We're Different
          </h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto">
            While others protect at runtime or manage data, we fix the problem at the source—in your code.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <Icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-text-gray leading-relaxed">
                      {card.description}
                      {card.competitor && (
                        <span className="text-accent-gold font-semibold">
                          {card.competitor}
                        </span>
                      )}
                      {card.description2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;

