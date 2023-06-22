// React Util
import React from "react";

// Constants
import { sections } from "../constants/Header";
import { contactOptions } from "../constants/Contact";

const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-filler">
      <div className="flex justify-evenly px-10">
        <div className="max-w-[300px]">
          <p className="font-extrabold font-accent text-accent text-2xl">
            LOGO
          </p>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
            ab dolorem! Architecto itaque aperiam amet id, fuga maiores. Placeat
            enim, sunt fugit labore quasi qui.
          </p>
        </div>
        <div>
          <p>Quick Links</p>
          <ul>
            {sections.map((section, index) => (
              <li key={index}>
                <a href={section.link}>{section.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Contact Us</p>
          <ul>
            {contactOptions.map((option) => (
              <li key={option.name} className="flex items-center">
                <div className="bg-accent rounded-full p-1">{option.icon}</div>

                <p>{option.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center px-10"></div>
    </footer>
  );
};

export default Footer;
