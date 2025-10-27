function Stats() {
  const text = "Transform your ideas into reality to get impactful and unforgettable branding solutions.";
  
  return (
    <>
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-text">
              <span className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap flex-shrink-0">
                {text}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap flex-shrink-0 ml-8">
                {text}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes scroll-text {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 2rem));
          }
        }
        
        .animate-scroll-text {
          animation: scroll-text 25s linear infinite;
          display: flex;
        }
      `}</style>
    </>
  );
}

export default Stats;
