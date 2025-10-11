const CTA = () => {
  return (
    <section id="waitlist" className="w-full py-32 px-10">
      <div className="max-w-content mx-auto">
        <div className="glass-card bg-[rgba(15,20,25,0.7)] rounded-2xl p-12 md:p-16 border border-primary/30 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be Among the First
          </h2>
          <p className="text-xl text-text-gray mb-10 max-w-2xl mx-auto">
            Join our waitlist for early access when we launch
          </p>
          <a
            href="YOUR_GOOGLE_FORM_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-1"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

