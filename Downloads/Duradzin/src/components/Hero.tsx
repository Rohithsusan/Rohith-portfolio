import { useState, useEffect } from 'react';
import Heroimage from '../assets/hero.png' ;

// AnimatedWord component for the second line with typewriter effect
function AnimatedWord({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word is complete, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // Pause for 1 second
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Word is deleted, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 120); // Faster deletion, moderate typing speed

    return () => clearInterval(typeInterval);
  }, [currentText, currentWordIndex, isDeleting, words]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block whitespace-nowrap text-left">
      {currentText}
      <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>
        |
      </span>
    </span>
  );
}

function Hero() { 
  const words = [
    "Imagine",
    "Think", 
    "Create",
    "Innovate",
    "DesignLanguage",
    "Purposeful",
    "Brand Identities",
    "Effective Logos"
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 dot-pattern relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold leading-none relative text-left">
            <div className="block">
              <div className="block">We</div>
              <div className="block min-h-[1.2em]">
                <AnimatedWord words={words} />
              </div>
            </div>
          </h1>
          <p className="text-gray-400 text-lg max-w-md">
            Crafting digital experiences that push boundaries and redefine what's possible
          </p>
          <button className="group flex items-center gap-2 text-[#E6ff2b] font-semibold text-lg hover:gap-4 transition-all duration-300">
            Explore our work
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="relative animate-slide-in-right flex items-center justify-center">
          <img 
            src={Heroimage}
            alt="Hero Imag"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Hero;
