// React Util
import React from "react";
import { useInView } from "react-intersection-observer";

// Images
import AboutIMG from "../assets/section1/SideImage.svg";

// Animations
import { motion } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full justify-center items-center max-w-[1000px] py-10 px-8 font-primary">
        <div className="h-full flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm text-gray-500"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.125 }}
            className="font-accent text-4xl font-bold"
          >
            Lorem Ipsum Dolor Sit Amet Consectetur
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-sm"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, beatae explicabo? Voluptates hic totam aut soluta
            maiores repudiandae, laudantium fuga nam eligendi! Numquam, velit
            ratione rerum, laudantium ab consequatur, a vitae ex at nisi atque
            corporis quibusdam aliquid enim? Eos.
          </motion.p>
          <div className="flex items-center gap-2 text-white font-accent mt-4">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="border border-accent bg-accent px-3 py-1 rounded"
            >
              Download
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="border border-accent text-accent px-3 py-1 rounded"
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          src={AboutIMG}
          alt="Girl sitting on a bitcoin sign surrounded by flowers and nature"
        />
      </div>
    </section>
  );
};

export default About;
