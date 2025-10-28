import { useState, useEffect, useRef } from 'react';

function FullScreenShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const projects = [
    {
      id: 1,
      name: 'PAPAMPARA Brand Identity',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1586953208416-cfe2d4a582e1?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 2,
      name: 'Restaurant Branding',
      images: [
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 3,
      name: 'Tech Startup Identity',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 4,
      name: 'Fashion Label Design',
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 5,
      name: 'Coffee Shop Branding',
      images: [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop'
      ]
    }
  ];

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = index * window.innerWidth;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const nextProject = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % projects.length;
      scrollToIndex(next);
      return next;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prev) => {
      const next = prev === 0 ? projects.length - 1 : prev - 1;
      scrollToIndex(next);
      return next;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextProject();
      }, 2000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  // Handle mouse wheel for horizontal scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        setIsAutoPlaying(false);
        
        if (e.deltaY > 0) {
          nextProject();
        } else {
          prevProject();
        }

        // Resume auto-play after 3 seconds of inactivity
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
        setTimeout(() => setIsAutoPlaying(true), 3000);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Header */}
      <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">What's cooking?</h1>
        
        {/* Progress Indicators */}
        <div className="flex items-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-12 h-3 bg-[#E6FF2B]' 
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex h-full overflow-x-hidden overflow-y-hidden"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-screen h-full p-8 md:p-12"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div 
              className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 animate-fadeIn"
              style={{
                animation: index === currentIndex ? 'fadeInScale 0.6s ease-out' : 'none'
              }}
            >
              {/* Large Image - Takes full left column */}
              <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src={project.images[0]}
                  alt={`${project.name} main`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-[#E6FF2B]">
                    <span>View project</span>
                    <span>→</span>
                  </div>
                </div>
              </div>

              {/* Small Images - Right column in 2x2 grid */}
              {project.images.slice(1).map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative group overflow-hidden rounded-2xl md:rounded-3xl"
                  style={{
                    animation: index === currentIndex 
                      ? `fadeInScale 0.6s ease-out ${(imgIndex + 1) * 0.1}s both` 
                      : 'none'
                  }}
                >
                  <img
                    src={image}
                    alt={`${project.name} ${imgIndex + 2}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevProject();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 3000);
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        ←
      </button>
      <button
        onClick={() => {
          nextProject();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 3000);
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        →
      </button>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Hide scrollbar */
        div::-webkit-scrollbar {
          display: none;
        }
        
        div {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default FullScreenShowcase;