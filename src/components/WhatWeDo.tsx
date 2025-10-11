import { Search, AlertTriangle, BarChart3, FileText, Settings } from 'lucide-react';

const WhatWeDo = () => {
  const cards = [
    {
      icon: Search,
      title: 'Discover Model Usage',
      description: 'Automatically scan your codebase to find every AI model call, API integration, and third-party service in use.',
    },
    {
      icon: AlertTriangle,
      title: 'Flag AI-Specific Risks',
      description: 'Detect hardcoded credentials, unvalidated prompts, data leakage patterns, and compliance violations.',
    },
    {
      icon: BarChart3,
      title: 'Generate AI Model Inventory',
      description: 'Create a comprehensive inventory documenting every AI model, version, and dependency in your system.',
    },
    {
      icon: FileText,
      title: 'Audit-Ready Evidence',
      description: 'Generate compliance documentation and evidence trails that satisfy SOC 2, ISO 27001, and enterprise requirements.',
    },
    {
      icon: Settings,
      title: 'MCP Integration',
      description: 'Seamlessly integrate with your existing development workflow through GitHub Actions and pull request automation.',
    },
  ];

  return (
    <section className="w-full py-32 px-10 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Actually Do
          </h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto">
            The complete GitHub-first AI governance workflow
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-accent-teal/20 hover:border-accent-teal/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-teal/20"
              >
                <div className="p-3 rounded-lg bg-accent-teal/10 border border-accent-teal/30 w-fit mb-4">
                  <Icon className="w-6 h-6 text-accent-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

