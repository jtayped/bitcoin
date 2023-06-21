// React Util
import React from "react";

// Constants
import { socials, sections } from "../constants/Header";

// Icons
import { BsList } from "react-icons/bs";

const Header = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-8 md:px-16 py-6 md:py-0 md:h-[90px] bg-white shadow">
      <p className="font-extrabold font-accent text-accent text-2xl">LOGO</p>
      <nav className="hidden md:flex items-center gap-6 font-accent">
        {sections.map((section, index) => (
          <a
            key={index}
            href={section.link}
            className={`${index === 0 ? "text-accent" : null}`}
          >
            {section.name.toUpperCase()}
          </a>
        ))}
      </nav>
      <ul className="hidden lg:flex items-center gap-3">
        {socials.map((socialMedia, index) => (
          <li key={index}>
            <a href={socialMedia.link}>{socialMedia.icon}</a>
          </li>
        ))}
      </ul>
      <button className="md:hidden">
        <BsList size={30} />
      </button>
    </div>
  );
};

export default Header;
