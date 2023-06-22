// React Util
import React from "react";

// Constants
import { sections, socials } from "../constants/Header";
import { contactOptions } from "../constants/Contact";

const Footer = () => {
  return (
    <footer className="mt-10 w-full flex flex-col text-white">
      <div className="flex justify-center bg-filler py-20">
        <div className="flex flex-wrap md:flex-row justify-between max-w-[1000x] gap-10 px-10">
          <div className="max-w-[300px]">
            <p className="font-extrabold font-accent text-accent text-2xl">
              LOGO
            </p>
            <p className="text-sm text-white/40">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              magnam ab dolorem! Architecto itaque aperiam amet id, fuga
              maiores. Placeat enim, sunt fugit labore quasi qui.
            </p>
          </div>
          <div>
            <p className="font-accent font-bold text-2xl">Quick Links</p>
            <ul className="text-white/50">
              {sections.map((section, index) => (
                <li key={index}>
                  <a href={section.link}>{section.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-accent font-bold text-2xl">Contact Us</p>
            <ul className="text-white/50 flex flex-col gap-2">
              {contactOptions.map((option) => (
                <li key={option.name} className="flex items-center gap-3">
                  <div className="bg-accent rounded-full p-1">
                    {option.icon}
                  </div>

                  <p>{option.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-10 py-5 bg-black">
        <p className="text-white/20">2020 All Rights Reserved</p>
        <ul className="flex items-center text-accent gap-2">
          {socials.map((socialMedia, index) => (
            <li key={index}>
              <a href={socialMedia.link}>{socialMedia.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
