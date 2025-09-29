import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Explore App', id: 'explore' },
    { name: 'About', id: 'about', hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 border-gray-800 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="public\Dribbl-full-logo.png" 
                alt="DRIBBL Ball Logo" 
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                      className="flex items-center text-gray-300 hover:text-red-400 transition-colors font-medium"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border-gray-700 rounded-lg shadow-lg border py-2">
                        <button
                          onClick={() => {
                            setCurrentPage('about');
                            setIsAboutDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-red-400 transition-colors"
                        >
                          About Company
                        </button>
                        <button
                          onClick={() => {
                            setCurrentPage('team');
                            setIsAboutDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-red-400 transition-colors"
                        >
                          About Team
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className={`font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-red-600'
                        : 'text-gray-300 hover:text-red-400'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover:text-red-400 transition-colors font-medium"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {isAboutDropdownOpen && (
                        <div className="pl-6 space-y-1">
                          <button
                            onClick={() => {
                              setCurrentPage('about');
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            About Company
                          </button>
                          <button
                            onClick={() => {
                              setCurrentPage('team');
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            About Team
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 font-medium transition-colors ${
                        currentPage === item.id
                          ? 'text-red-600'
                          : 'text-gray-300 hover:text-red-400'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
