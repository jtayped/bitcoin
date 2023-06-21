// React Util
import React from "react";

// Images
import BG from "../assets/hero/bg.jpg";

const Hero = () => {
  return (
    <div
      style={{ "--image-url": `url(${BG})` }}
      className="bg-[image:var(--image-url)] bg-cover bg-fixed bg-center w-full h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-3 items-center text-center text-white px-4">
        <h1 className="text-6xl font-accent font-extrabold">
          Bitcoin, The Future
        </h1>
        <p className="font-accent max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis
          eos doloremque. Autem cum deserunt nihil itaque. Architecto, molestias
          id!
        </p>
        <button className="bg-accent p-3 text-sm font-accent">
          DOWNLOAD NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
