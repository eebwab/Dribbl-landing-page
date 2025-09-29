import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SneakPeek from './components/SneakPeek';
import EmailSignup from './components/EmailSignup';
import About from './components/About';
import Team from './components/Team';
import Explore from './components/Explore';

const SneakPeekWithRef = SneakPeek as React.ForwardRefExoticComponent<React.PropsWithoutRef<{ emailSignupRef: React.RefObject<HTMLDivElement>; }> & React.RefAttributes<HTMLDivElement>>;
const EmailSignupWithRef = EmailSignup as React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<HTMLDivElement>>;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [postponedScroll, setPostponedScroll] = useState(false);
  const emailSignupRef = useRef<HTMLDivElement>(null);
  const sneakPeekRef = useRef<HTMLDivElement>(null);

  const handleNavigateToSignup = () => {
    setCurrentPage('home');
    setPostponedScroll(true);
  };

  useEffect(() => {
    if (postponedScroll && currentPage === 'home' && emailSignupRef.current) {
      emailSignupRef.current.scrollIntoView({ behavior: 'smooth' });
      setPostponedScroll(false); // Reset the flag
    }
  }, [postponedScroll, currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} sneakPeekRef={sneakPeekRef} />
            <Features />
            <SneakPeekWithRef ref={sneakPeekRef} emailSignupRef={emailSignupRef} />
            <EmailSignupWithRef ref={emailSignupRef} />
          </>
        );
      case 'explore':
        return <Explore setCurrentPage={setCurrentPage} onJoinWaitlist={handleNavigateToSignup} />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} sneakPeekRef={sneakPeekRef} />
            <Features />
            <SneakPeekWithRef ref={sneakPeekRef} emailSignupRef={emailSignupRef} />
            <EmailSignupWithRef ref={emailSignupRef} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white border-gray-800 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="public\Dribbl-full-logo.png" 
                  alt="DRIBBL Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Canada's first soccer social network. Connect, compete, and celebrate 
                the beautiful game with players and fans across the country.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 Dribbl. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('about');
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-red-600 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('team');
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-red-600 transition-colors"
                  >
                    Our Team
                  </button>
                </li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;