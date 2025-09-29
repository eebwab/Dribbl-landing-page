import React from 'react';
import { MapPin, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-900/30 text-red-300 border-red-800 rounded-full text-sm font-medium border">
              🏢 About Dribbl
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Building the Future of{' '}
              <span className="text-red-400">Soccer Social</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Dribbl is more than just another social media app. We're creating a dedicated space 
              where soccer culture thrives, communities grow, and the beautiful game brings people together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To create the world's most engaging soccer community platform, where players, fans, 
                and creators can connect, share, and celebrate the beautiful game in a positive, 
                inclusive environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-900/30 border border-red-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Soccer-First Design</h3>
                    <p className="text-gray-400">Built specifically for soccer communities with features that matter to players and fans.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Positive Community</h3>
                    <p className="text-gray-400">Fostering a supportive environment where soccer culture can thrive without toxicity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-gray-400">Community Image Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                These core principles guide everything we do at Dribbl
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-900/30 border border-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Passion for Soccer</h3>
                <p className="text-gray-400">We're soccer fans first, building for soccer fans. Every feature is designed with the beautiful game in mind.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community First</h3>
                <p className="text-gray-400">Real connections matter. We prioritize meaningful interactions over viral content.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-900/30 border border-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Local to Global</h3>
                <p className="text-gray-400">Starting in Canada, building for the world. We celebrate local soccer culture while connecting globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;