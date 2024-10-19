import React, { useState } from "react";
import "../style/style.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = [
    "About Me",
    "My Story",
    "My Skills",
    "My Projects",
    "Contact Me",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar grid grid-cols-3 max-[800px]:grid-cols-2 p-4 bg-gray-800 text-white">
      <a className="navbar-brand " href="/">
        My Portfolio
      </a>

      <ul className="grid grid-cols-5 col-start-3 max-[1500px]:col-start-2 max-[1500px]:col-span-2 max-[800px]:hidden">
        {menu.map((item, index) => (
          <li key={index} className="">
            <a
              href={`#${item}`}
              className="hover:text-gray-400 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="min-[800px]:hidden flex justify-end items-center">
        <div className="hamburger cursor-pointer" onClick={toggleMenu}>
          <div className="bar w-6 h-0.5 bg-blue-800 my-1"></div>
          <div className="bar w-6 h-0.5 bg-blue-800 my-1"></div>
          <div className="bar w-6 h-0.5 bg-blue-800 my-1"></div>
        </div>
      </div>

      {menuOpen && (
        <ul
          id="nav-links"
          className="col-span-3 max-[800px]:block  text-center p-4 space-y-2"
        >
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                className="block py-2 text-blue-800 hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
