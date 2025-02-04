// src/components/Header.tsx
import { useState, FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex bg-black text-white sticky top-0 z-50">
      <nav className="flex flex-row items-center justify-between mx-8 w-full h-24">
        {/* Mobile Menu Button */}
        <div className="flex-1 lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
          >
            <span>Menu</span>
          </button>
        </div>
        {/* Logo / Brand */}
        <div className="flex-1 text-xl font-bold w-md md:w-lg">
          <Link to="/" className="flex flex-col lg:flex-row items-center">
            <img
              src="bca_logo.png"
              alt="BCA Logo"
              className="hidden lg:flex h-7 mr-2"
            />
            <span>BCA Math Team</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-[1.2] flex-row justify-between w-md h-full">
          <Link className="flex-1 group relative z-0 p-4" to="/">
            <span className="flex flex-col items-center justify-center h-full overflow-hidden">
              <span className="relative z-10 text-transparent bg-white bg-clip-text transition-all duration-300 group-hover:bg-black">
                Home
              </span>
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 aspect-square w-full scale-[1.5] origin-center -translate-y-[150%] bg-yellow-500 transition-all duration-600 group-hover:-translate-y-0 group-hover:scale-[1.5]"></span>
            </span>
          </Link>
          <Link className="flex-1 group relative z-0 p-4" to="/about">
            <span className="flex flex-col items-center justify-center h-full overflow-hidden">
              <span className="relative z-10 text-transparent bg-white bg-clip-text transition-all duration-300 group-hover:bg-black">
                About
              </span>
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 aspect-square w-full scale-[1.5] origin-center -translate-y-[150%] bg-yellow-500 transition-all duration-600 group-hover:-translate-y-0 group-hover:scale-[1.5]"></span>
            </span>
          </Link>
          <Link className="flex-1 group relative z-0 p-4" to="/summer">
            <span className="flex flex-col text-center items-center justify-center h-full overflow-hidden">
              <span className="relative z-10 text-transparent bg-white bg-clip-text transition-all duration-300 group-hover:bg-black">
                Summer
              </span>
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 aspect-square w-full scale-[1.5] origin-center -translate-y-[150%] bg-yellow-500 transition-all duration-600 group-hover:-translate-y-0 group-hover:scale-[1.5]"></span>
            </span>
          </Link>
          <Link className="flex-1 group relative z-0 p-4" to="/archive">
            <span className="flex flex-col items-center justify-center h-full overflow-hidden">
              <span className="relative z-10 text-transparent bg-white bg-clip-text transition-all duration-300 group-hover:bg-black">
                Archive
              </span>
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 aspect-square w-full scale-[1.5] origin-center -translate-y-[150%] bg-yellow-500 transition-all duration-600 group-hover:-translate-y-0 group-hover:scale-[1.5]"></span>
            </span>
          </Link>
          <Link className="flex-1 group relative z-0 p-4" to="/resources">
            <span className="flex flex-col items-center justify-center h-full overflow-hidden">
              <span className="relative z-10 text-transparent bg-white bg-clip-text transition-all duration-300 group-hover:bg-black">
                Resources
              </span>
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 aspect-square w-full scale-[1.5] origin-center -translate-y-[150%] bg-yellow-500 transition-all duration-600 group-hover:-translate-y-0 group-hover:scale-[1.5]"></span>
            </span>
          </Link>
          <Link className="flex-1 group relative z-0 p-4" to="/awards">
            <span className="flex flex-col items-center justify-center h-full overflow-hidden">
              <span className="relative z-10 text-transparent bg-white bg-clip-text transition-all duration-300 group-hover:bg-black">
                Awards
              </span>
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 aspect-square w-full scale-[1.5] origin-center -translate-y-[150%] bg-yellow-500 transition-all duration-600 group-hover:-translate-y-0 group-hover:scale-[1.5]"></span>
            </span>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>
      </nav>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="absolute z-10 w-sm">
          <div className="h-[5000] fixed bg-black text-white p-4">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative top-0 right-0 p-4"
            >
              Close
            </button>
            <ul className="flex flex-col items-center justify-center">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/summer" onClick={toggleMenu}>
                  Summer Lectures
                </Link>
              </li>
              <li>
                <Link to="/archive" onClick={toggleMenu}>
                  Archive
                </Link>
              </li>
              <li>
                <Link to="/resources" onClick={toggleMenu}>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/awards" onClick={toggleMenu}>
                  Awards
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
