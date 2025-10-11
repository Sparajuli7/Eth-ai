const VideoDemo = () => {
  return (
    <section className="w-full py-32 px-10">
      <div className="max-w-content mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="AI Governance Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;

