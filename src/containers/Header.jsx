// React Util
import React, { useState } from "react";

// Constants
import { socials, sections } from "../constants/Header";

// Icons
import { BsList } from "react-icons/bs";

// JSX Components
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  function toggleSideBar() {
    setOpen(!isOpen);
  }

  return (
    <div className="z-10 fixed top-0 w-full flex justify-between items-center px-8 md:px-16 py-6 md:py-0 md:h-[90px] bg-white shadow">
      <a
        href="#hero"
        className="font-extrabold font-accent text-accent text-2xl"
      >
        LOGO
      </a>
      <nav className="hidden md:flex items-center gap-6 font-accent">
        {sections.map((section, index) => (
          <a
            key={index}
            href={section.link}
            className={`hover:text-accent hover:-translate-y-0.5 transition-all duration-200 ${
              index === 0 ? "text-accent" : null
            }`}
          >
            {section.name.toUpperCase()}
          </a>
        ))}
      </nav>
      <ul className="hidden lg:flex items-center gap-3">
        {socials.map((socialMedia, index) => (
          <li key={index}>
            <a
              className="hover:text-accent transition-colors duration-50"
              href={socialMedia.link}
            >
              {socialMedia.icon}
            </a>
          </li>
        ))}
      </ul>
      <button className="md:hidden" onClick={() => toggleSideBar()}>
        <BsList size={30} />
      </button>
      {isOpen ? <SideBar toggleSideBar={toggleSideBar} /> : null}
    </div>
  );
};

export default Header;
