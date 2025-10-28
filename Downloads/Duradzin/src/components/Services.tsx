import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: 'UX/UI Design',
      description: 'Digital fancies can be transformed into amazing realities through the process of crafting pixels.',
      icon: '✨'
    },
    {
      title: 'Branding',
      description: 'Experience the power of storytelling as we craft a brand experience that makes people fall in love at first sight. Make an impression, remain recalled, and take over your audience hearts',
      icon: '🎯'
    },
    {
      title: 'Logo designing ',
      description: 'Turn your brands idea into a captivating masterpiece that speaks volumes with a single look. Do the business and even let your logo speak for itself!',
      icon: '📈'
    },
    {
      title: 'Packing Design ',
      description: 'Unwrap success with stunning packaging designs that promote your products! Ready to create a lasting impression and make your rivals envious?',
      icon: '📈'
    } ,
    {
      title: 'Graphic Design ',
      description: 'Our design pros will transform your concepts into eye-catching designs, from a single pixel to the final product. Ready to dazzle the world with appealing graphics that hold the spotlight!',
      icon: '🎨'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    // Wait for refs to be set before observing
    setTimeout(() => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => observer.disconnect();
  }, [services.length]);

  return (
    <section className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl font-bold">Flavors That Define Us</h2>
        
          </div>
          <button className="text-[#E6ff2b] hover:text-white transition-colors duration-300">
            View all →
          </button>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => {
            const isVisible = visibleCards.has(index);
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                data-visible={isVisible}
                className="service-card group cursor-pointer border-t border-gray-200 last:border-b bg-black/0 text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                <div className="max-w-7xl mx-auto px-6 py-12">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-8">
                      <h3 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 text-white group-hover:text-black">
                        {service.title}
                      </h3>
                      <p className="text-lg leading-relaxed transition-colors duration-500 text-gray-400 group-hover:text-gray-700">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRight 
                        className="w-8 h-8 transform transition-all duration-500 group-hover:translate-x-2 text-white group-hover:text-black" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-card {
          /* Initial state: transparent and shifted down */
          opacity: 0;
          transform: translateY(30px);
          
          /* Scroll reveal transitions */
          transition: opacity 0.7s ease, transform 0.7s ease, background-color 0.5s ease, color 0.5s ease;
        }
        
        /* Visible state when in viewport */
        .service-card[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Individual hover states - each card changes to white on hover */
        .service-card:hover {
          background-color: rgba(255, 255, 255, 1) !important;
          color: black !important;
        }
        
        /* Smooth transitions for text elements */
        .service-card h3 {
          transition: color 0.5s ease;
        }
        
        .service-card p {
          transition: color 0.5s ease;
        }
        
        .service-card svg {
          transition: color 0.5s ease, transform 0.5s ease;
        }
      `}</style>
    </section>
  );
}

export default Services;