import React, { useState, forwardRef } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const EmailSignup: React.FC = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-r from-red-900 via-black to-red-900 bg-[length:200%_200%] animate-gradient-bg"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-red-900/30 text-red-300 border-red-800 rounded-full text-sm font-medium border">
              📧 Stay Updated
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Be First to{' '}
              <span className="text-red-400">Experience</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Join our early access list and be among the first to experience Dribbl. 
              Get exclusive updates, behind-the-scenes content, and early app access.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 bg-green-900/30 border border-green-800 rounded-xl">
              <p className="text-green-300 font-medium">
                🎉 Thanks for joining! We'll keep you updated on our progress.
              </p>
            </div>
          )}

          <p className="text-sm text-gray-500">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
});

export default EmailSignup;