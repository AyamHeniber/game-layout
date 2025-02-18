import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white fixed z-20 w-full">
      <div className="flex items-center space-x-2">
        <img src="https://ts4.eer-wsd.com/assets/logo-C3lxHNje.png" alt="Logo" className="h-10 w-auto" />
      </div>

      <div className="relative">
        <button 
          className="px-4 py-1 bg-[rgb(85,36,0)] rounded-full text-sm hover:cursor-pointer" 
          onClick={toggleDropdown}
        >
          {language}
        </button>
        {isDropdownOpen && (
          <div className="absolute z-50 top-full right-0 bg-[rgb(175,92,33)] text-sm text-white rounded shadow-md mt-2 w-auto">
            <ul className=''>
              <li>
                <button
                  onClick={() => handleLanguageChange('English')}
                  className="block px-4 py-2 text-left w-full hover:cursor-pointer hover:text-yellow-300"
                >
                  English
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLanguageChange('Korean')}
                  className="block px-4 py-2 text-left w-full hover:cursor-pointer hover:text-yellow-300"
                >
                  Korean
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <Link to="/" className="text-white px-4 py-1 rounded-md bg-[rgb(85,36,0)]">Login</Link>
        <Link to="/" className="text-white px-4 py-1 rounded-md bg-[rgb(85,36,0)]">Register</Link>
      </div>
    </header>
  );
};

export default Header;
