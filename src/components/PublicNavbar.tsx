import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PublicNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();

  const isEn = i18n.language && i18n.language.startsWith('en');

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Theme initialization
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(isEn ? 'fr' : 'en');
  };

  const navLinks = [
    { name: isEn ? 'Home' : 'Accueil', path: '/' },
    { name: isEn ? 'How it works' : 'Comment ça marche', path: '/#how-it-works' },
    { name: isEn ? 'For who' : 'Pour qui', path: '/#target' },
    { name: isEn ? 'Legal' : 'Légal', path: '/cgu' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0A1A14]/80 backdrop-blur-md border-[#143028]/10 dark:border-white/10 shadow-sm py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
           <img src="https://fayma.co/faymaco-transparent-2048.png" alt="Faymaco Logo" className="w-8 h-8 object-contain dark:saturate-0" />
           <span className="text-xl font-bold tracking-tight text-[#143028] dark:text-white">
             Faymaco
           </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[#143028]/70 dark:text-white/70 hover:text-[#143028] dark:hover:text-white font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-[#143028]/5 dark:bg-white/5 rounded-full p-1 mr-2">
            <button onClick={toggleLanguage} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white dark:hover:bg-white/10 transition-all text-lg shadow-sm" aria-label="Toggle language">
              {isEn ? '🇺🇸' : '🇫🇷'}
            </button>
            <button onClick={toggleTheme} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white dark:hover:bg-white/10 transition-all text-[#143028] dark:text-white shadow-sm" aria-label="Toggle theme">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <a
            href="/#request-access"
            className="bg-[#143028] dark:bg-[#DAFFD1] text-white dark:text-[#143028] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            {isEn ? 'Request Access' : "Demander l'accès"}
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#143028] dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0A1A14] border-b border-[#143028]/10 dark:border-white/10 shadow-lg py-5 px-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#143028] dark:text-white font-semibold text-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-[#143028]/10 dark:bg-white/10 w-full my-2"></div>
          
          <div className="flex items-center justify-between">
            <span className="text-[#143028]/70 dark:text-white/70 font-medium">{isEn ? 'Language' : 'Langue'}</span>
            <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#143028]/5 dark:bg-white/5 font-semibold text-lg hover:bg-[#143028]/10 transition-colors">
               {isEn ? '🇺🇸 English' : '🇫🇷 Français'}
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-[#143028]/70 dark:text-white/70 font-medium">{isEn ? 'Theme' : 'Thème'}</span>
            <button onClick={toggleTheme} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#143028]/5 dark:bg-white/5 text-[#143028] dark:text-white hover:bg-[#143028]/10 transition-colors">
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="h-px bg-[#143028]/10 dark:bg-white/10 w-full my-2"></div>
          <a
            href="/#request-access"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#143028] dark:bg-[#DAFFD1] text-white dark:text-[#143028] px-5 py-3.5 rounded-xl text-center text-sm font-bold uppercase tracking-wider shadow-md flex justify-center items-center gap-2"
          >
            {isEn ? 'Request Access' : "Demander l'accès"}
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default PublicNavbar;
