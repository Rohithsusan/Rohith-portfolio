import { useEffect, useRef, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const words = [
    { text: "To", highlight: false },
    { text: "solve", highlight: false },
    { text: "modern", highlight: false },
    { text: "business", highlight: false },
    { text: "challenges,", highlight: false },
    { text: "we", highlight: false },
    { text: "have", highlight: false },
    { text: "fresh", highlight: true },
    { text: "ideas", highlight: true },
    { text: "and", highlight: false },
    { text: "the", highlight: false },
    { text: "expertise", highlight: false },
    { text: "to", highlight: false },
    { text: "bring", highlight: false },
    { text: "them", highlight: false },
    { text: "to", highlight: false },
    { text: "life", highlight: false }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-32 px-6 border-t border-gray-800 bg-[#121212]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-4xl md:text-5xl font-light leading-relaxed">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block word-fade-in ${
                word.highlight ? 'font-bold text-[#E6ff2b]' : ''
              } ${isVisible ? 'animate' : ''}`}
              style={{
                animationDelay: `${index * 120}ms`
              }}
            >
              {word.text}
              {index < words.length - 1 && '\u00A0'}
            </span>
          ))}
        </p>
      </div>

      <style>{`
        .word-fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: none;
        }
        
        .word-fade-in.animate {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default About;
