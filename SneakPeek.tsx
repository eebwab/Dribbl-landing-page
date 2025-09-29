import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';

interface SneakPeekProps {
  emailSignupRef: React.RefObject<HTMLDivElement>;
}

// Function to interpolate between two RGB colors
const interpolateColor = (color1: number[], color2: number[], factor: number) => {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
};

const COLOR_START = [248, 113, 113]; // Corresponds to text-red-400
const COLOR_END = [255, 20, 20];     // A more vibrant, pure red

const SneakPeek = forwardRef<HTMLDivElement, SneakPeekProps>(({ emailSignupRef }, ref) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = titleRef.current;
      if (currentRef) {
        const { top } = currentRef.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        const progress = (screenHeight - top) / (screenHeight / 2);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSignup = () => {
    emailSignupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scale = 1 + 0.1 * scrollProgress;
  const color = interpolateColor(COLOR_START, COLOR_END, scrollProgress);

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-900/30 text-red-300 border-red-800 rounded-full text-sm font-medium border">
                🎬 Sneak Peek
              </div>
              <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                See Dribbl in{' '}
                <span
                  className="relative inline-block"
                  style={{
                    color: color,
                    transform: `scale(${scale})`,
                    transition: 'transform 100ms linear, color 100ms linear',
                  }}
                >
                  Action
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 origin-left"
                    style={{
                      transform: `scaleX(${scrollProgress})`,
                      transition: 'transform 100ms linear',
                    }}
                  ></span>
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get a first look at how Dribbl brings soccer communities together. 
                From match highlights to team discussions, see the future of soccer social media.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
              <button 
                onClick={handleScrollToSignup}
                className="inline-flex items-center px-8 py-4 bg-transparent font-semibold rounded-xl border-2 border-red-600 transition-all duration-200 text-red-400 hover:bg-red-600 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-400">Demo Video Coming Soon</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SneakPeek;