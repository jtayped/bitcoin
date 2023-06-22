// React Util
import React from "react";
import { useInView } from "react-intersection-observer";

// Images
import MainIMG from "../assets/section3/SideImage.webp";

// Animations
import { motion } from "framer-motion";

const Classes = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section
      id="classes"
      ref={ref}
      className="w-full flex items-center justify-center"
    >
      <div className="max-w-[1200px] py-10 px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "tween" }}
          className="flex items-center justify-center"
        >
          <div>
            <h2 className="text-sm text-gray-500">Classes</h2>
            <p className="font-accent text-4xl font-bold">
              Lorem Ipsum Dolor Sit
            </p>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, beatae explicabo? Voluptates hic totam aut soluta
              maiores repudiandae, laudantium fuga nam eligendi! Numquam, velit
              ratione rerum, laudantium ab consequatur, a vitae ex at nisi atque
              corporis quibusdam aliquid enim? Eos.
            </p>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "tween" }}
          className="shadow-lg"
          src={MainIMG}
          alt="Coin that represents Bitcoin"
        />
      </div>
    </section>
  );
};

export default Classes;
