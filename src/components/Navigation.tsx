
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center space-x-3">
            <img 
              src="https://raw.githubusercontent.com/ma3u/blood-test/main/public/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
              alt="LongevityCoa.ch Logo" 
              className="h-10 w-auto object-contain"
            />
            <button 
              onClick={() => navigateToPage('/')}
              className="text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
            >
              LongevityCoa.ch
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('journey')}
                className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Journey
              </button>
              <button 
                onClick={() => navigateToPage('/reference-values')}
                className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === '/reference-values' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                References
              </button>
              <button 
                onClick={() => navigateToPage('/resources')}
                className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === '/resources' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Resources
              </button>
              <button 
                onClick={() => navigateToPage('/business-plan')}
                className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === '/business-plan' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Business
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Contact
              </button>
              <Button 
                onClick={() => navigateToPage('/prototypes')}
                size="sm"
                className={`text-xs bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 ${
                  location.pathname === '/prototypes' ? 'ring-2 ring-blue-300' : ''
                }`}
              >
                Early Access
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-slate-200">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('journey')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                My Journey
              </button>
              <button 
                onClick={() => navigateToPage('/reference-values')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/reference-values' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Reference Values
              </button>
              <button 
                onClick={() => navigateToPage('/resources')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/resources' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Resources
              </button>
              <button 
                onClick={() => navigateToPage('/business-plan')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/business-plan' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Business Plan
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Contact
              </button>
              <div className="pt-2">
                <Button 
                  onClick={() => navigateToPage('/prototypes')}
                  className={`w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 ${
                    location.pathname === '/prototypes' ? 'ring-2 ring-blue-300' : ''
                  }`}
                >
                  Early Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
