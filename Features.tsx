import React from 'react';
import { Share2, Users, Trophy, Globe } from 'lucide-react';

const features = [
  {
    icon: Share2,
    title: 'Share Your Game',
    description: 'Post match highlights, training clips, and behind-the-scenes moments with the soccer community.',
    color: 'bg-red-900/30 text-red-400 border border-red-800'
  },
  {
    icon: Users,
    title: 'Join Communities',
    description: 'Connect with team communities and league threads. Find your tribe in the beautiful game.',
    color: 'bg-gray-800 text-gray-300 border border-gray-700'
  },
  {
    icon: Trophy,
    title: 'Compete & Challenge',
    description: 'Participate in skill challenges and showcase your abilities to the soccer world.',
    color: 'bg-red-900/30 text-red-400 border border-red-800'
  },
  {
    icon: Globe,
    title: 'Stay Updated',
    description: 'Get the latest news on local and global soccer, from CPL to European leagues.',
    color: 'bg-gray-800 text-gray-300 border border-gray-700'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What is{' '}
            <span className="relative inline-block group transition-all duration-300 hover:scale-110 hover:text-red-600">
              Dribbl
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">?</span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dribbl is Canada's first-ever soccer-only social media app — a positive, 
            engaging space for soccer lovers to connect and celebrate the game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-900 hover:bg-gray-800 border-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer border"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-transform duration-300 group-hover:scale-110">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed transition-transform duration-300 group-hover:scale-110">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Dribbl Section */}
        <div className="mt-20 bg-gray-900 border-gray-800 rounded-3xl p-8 lg:p-12 border-2 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:scale-105">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-white">
              Why Dribbl?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔥</div>
                <div>
                  <p className="text-lg text-gray-300">No more toxic feeds — Dribbl is for real soccer fans</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🧠</div>
                <div>
                  <p className="text-lg text-gray-300">Smart, soccer-first design — not another generic social app</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <p className="text-lg text-gray-300">Built in Canada, made for the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;