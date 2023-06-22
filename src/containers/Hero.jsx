// React Util
import React from "react";

// Images
import BG from "../assets/hero/bg.jpg";

// Animations
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{ "--image-url": `url(${BG})` }}
      className="bg-[image:var(--image-url)] bg-cover bg-fixed bg-center w-full h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-3 items-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl font-accent font-extrabold"
        >
          Bitcoin, The Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.125 }}
          className="font-accent max-w-[500px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis
          eos doloremque. Autem cum deserunt nihil itaque. Architecto, molestias
          id!
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-accent p-3 text-sm font-accent"
        >
          DOWNLOAD NOW
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
