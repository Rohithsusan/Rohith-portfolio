import { useState } from 'react';


function Showcase() {
  const [currentSet, setCurrentSet] = useState(0);
  
  const projectSets = [
    [
      { 
        id: 1, 
        title: 'Brand Identity & Packaging', 
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
        isLarge: true 
      },
      { 
        id: 2, 
        title: 'Uniform Design', 
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      },
      { 
        id: 3, 
        title: 'Web Application', 
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      },
      { 
        id: 4, 
        title: 'Product Packaging', 
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      },
      { 
        id: 5, 
        title: 'Logo Design', 
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      }
    ],
    [
      { 
        id: 6, 
        title: 'E-Commerce Platform', 
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
        isLarge: true 
      },
      { 
        id: 7, 
        title: 'Mobile App Design', 
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      },
      { 
        id: 8, 
        title: 'Brand Guidelines', 
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      },
      { 
        id: 9, 
        title: 'Marketing Materials', 
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      },
      { 
        id: 10, 
        title: 'Digital Campaign', 
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
        isLarge: false 
      }
    ]
  ];

  const currentProjects = projectSets[currentSet];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % projectSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + projectSets.length) % projectSets.length);
  };

  return (
    <section className="py-20  border-t border-gray-800 bg-black">
      {/* Header with Navigation */}
      <div className="max-w-7xl px-16 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold">What's cookin'?</h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSet}
              className="w-10 h-10 flex items-center justify-center text-[#F8E71C] hover:text-white transition-colors duration-300 text-2xl"
              aria-label="Previous set"
            >
              ←
            </button>
            <button
              onClick={nextSet}
              className="w-10 h-10 flex items-center justify-center text-[#F8E71C] hover:text-white transition-colors duration-300 text-2xl"
              aria-label="Next set"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Full-Width Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-6 h-[400px] xl:h-[600px] ">
        {/* Large Card - Left Side (65% width) */}
        <div className="xl:col-span-8 h-full">
          <div className="group relative w-full h-full rounded-xl overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-all duration-300">
            <img 
              src={currentProjects[0].image}
              alt={currentProjects[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          </div>
        </div>

        {/* Small Cards Grid - Right Side (32-33% width) */}
        <div className="xl:col-span-4 grid grid-cols-2 gap-4 xl:gap-6 h-full">
          {currentProjects.slice(1).map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-all duration-300"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;