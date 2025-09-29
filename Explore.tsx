import React from 'react';
import { Smartphone, Users, MessageCircle, Trophy, Globe, Heart } from 'lucide-react';

interface ExploreProps {
  setCurrentPage: (page: string) => void;
  onJoinWaitlist: () => void;
}

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Built specifically for mobile devices with intuitive touch controls and smooth navigation.',
    color: 'bg-red-900/30 text-red-400 border border-red-800'
  },
  {
    icon: Users,
    title: 'Community Features',
    description: 'Join team communities, league threads, and connect with soccer enthusiasts across Canada.',
    color: 'bg-gray-800 text-gray-300 border border-gray-700'
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat',
    description: 'Instant messaging with teammates, coaches, and fellow fans with soccer-specific features.',
    color: 'bg-red-900/30 text-red-400 border border-red-800'
  },
  {
    icon: Trophy,
    title: 'Skill Challenges',
    description: 'Participate in skill challenges, showcase your abilities, and compete with others.',
    color: 'bg-gray-800 text-gray-300 border border-gray-700'
  },
  {
    icon: Globe,
    title: 'Local & Global',
    description: 'Connect with local soccer communities while staying updated on global soccer news.',
    color: 'bg-red-900/30 text-red-400 border border-red-800'
  },
  {
    icon: Heart,
    title: 'Positive Environment',
    description: 'A supportive space focused on celebrating soccer without the toxicity of other platforms.',
    color: 'bg-gray-800 text-gray-300 border border-gray-700'
  }
];

const Explore: React.FC<ExploreProps> = ({ setCurrentPage, onJoinWaitlist }) => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-900/30 text-red-300 border-red-800 rounded-full text-sm font-medium border">
              📱 App Features
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Explore{' '}
              <span className="text-red-400">Dribbl</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover the features that make Dribbl the ultimate soccer social platform. 
              Built by soccer fans, for soccer fans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-900 hover:bg-gray-800 border-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer border"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-20 bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-800">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're working hard to bring Dribbl to life. Join our waitlist to be among 
                the first to experience Canada's premier soccer social platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onJoinWaitlist}
                  className="px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Join Waitlist
                </button>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="px-8 py-4 bg-transparent font-semibold rounded-xl border-2 border-red-600 transition-all duration-200 text-red-400 hover:bg-red-600 hover:text-white"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;