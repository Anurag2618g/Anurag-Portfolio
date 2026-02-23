import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MENU_LINKS } from "../utils/data";
import LOGO from "../assets/images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <nav className="container mx-auto z-10 top-5 sticky">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/* LOGO */}
        <div className="flex items-center justify-between gap-1 md:gap-2">
          <img className="h-10 ml-6 mb-1" src={LOGO} alt="Logo" />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">ANURAG GUPTA</h1>
        </div>

        {/* Hamburger */}
        <button
          className="block md:hidden text-[#333] mr-6 focusOutline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                spy
                smooth
                offset={item.offset}
                to={item.to}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <button
          className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary
        rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
