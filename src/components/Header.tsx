// src/components/Header.tsx
import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">
          <Link to="/" className="flex items-center">
            <img src="bca_logo.png" alt="BCA Logo" className="h-7 mr-2" />
            <span>BCA Math Team</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/summer">Summer Lectures</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/archive">Archive</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/awards">Awards</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span className="material-icons">menu</span>
        </button>
      </nav>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/summer" onClick={toggleMenu}>Summer Lectures</Link></li>
          <li><Link to="/research" onClick={toggleMenu}>Research</Link></li>
          <li><Link to="/archive" onClick={toggleMenu}>Archive</Link></li>
          <li><Link to="/resources" onClick={toggleMenu}>Resources</Link></li>
          <li><Link to="/awards" onClick={toggleMenu}>Awards</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
