const Stats = () => {
  const stats = [
    { value: '<10min', label: 'Time to Evidence' },
    { value: '60%+', label: 'Auto-Fix Rate' },
    { value: '<15%', label: 'False Positives' },
  ];

  return (
    <section className="w-full py-16 px-10 border-t border-b border-primary/20">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-text-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

