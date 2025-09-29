import React, { useEffect, useRef, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
  sneakPeekRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage, sneakPeekRef }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'r') {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleScrollToSneakPeek = () => {
    sneakPeekRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-900/30 text-red-300 border-red-800 rounded-full text-sm font-medium border">
                🍁 Canada's First Soccer Social Network
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Welcome to{' '}
                <span className="text-red-800">Dribbl</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                The dedicated platform for soccer fans, players, and creators to connect, 
                compete, and celebrate the beautiful game — all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('explore')}
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore the App
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={handleScrollToSneakPeek}
                className="inline-flex items-center px-8 py-4 bg-transparent font-semibold rounded-xl border-2 border-red-600 transition-all duration-200 text-red-400 hover:bg-red-600 hover:text-white"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Hero Video */}
          <div className="relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <video
                ref={videoRef}
                src="/Figma-bootup-cropped.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Hover Tooltip */}
              <div 
                className={`absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isHovering 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-2'
                }`}
              >
                Click 'r' to replay video
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;