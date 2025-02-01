// src/components/Header.tsx
import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex bg-black text-white">
      <nav className="flex flex-row items-center justify-between mx-8 w-full h-28">
        {/* Logo / Brand */}
        <div className="flex-1 text-xl font-bold w-1/3">
          <Link to="/" className="flex items-center">
            <img src="bca_logo.png" alt="BCA Logo" className="h-7 mr-2" />
            <span>BCA Math Team</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex flex-row justify-between w-1/3 h-full">
          <Link className="flex-1 items-center justify-center" to="/">Home</Link>
          <Link className="flex-1 text-center" to="/about">About</Link>
          <Link className="flex-1 text-center" to="/summer">Summer Lectures</Link>
          <Link className="flex-1 text-center" to="/archive">Archive</Link>
          <Link className="flex-1 text-center" to="/resources">Resources</Link>
          <Link className="flex-1 text-center" to="/awards">Awards</Link>
          <Link className="flex-1 group relative z-0" to="/awards">
            <span className="flex flex-col items-center justify-center h-full overflow-hidden">
              <span className="absolute inset-0 aspect-square w-full scale-500 origin-center -translate-y-full bg-yellow-500 transition-all duration-1000 group-hover:-translate-y-0 group-hover:scale-500"></span>
              <span className="relative z-10 text-white transition-colors duration-500 mix-blend-difference">Awards</span>
              {/* Darker Duplicate Layer for Stacking Effect */}
              <span className="absolute z-10 text-black mix-blend-overlay">Awards</span>
              <span className="absolute z-10 text-black mix-blend-overlay">Awards</span>
              <span className="absolute z-10 text-black mix-blend-overlay">Awards</span>
            </span>
            

          </Link>
        </div>

        {/* Mobile Menu Button
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span className="material-icons">menu</span>
        </button> */}

        <div className="flex-1 w-1/3"></div>
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
