// React Util
import React from "react";
import { useInView } from "react-intersection-observer";

// Images
import { options } from "../constants/Options";

// Animations
import { motion } from "framer-motion";

const Options = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      ref={ref}
      className="flex flex-col gap-5 items-center py-10 px-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-center max-w-[500px]"
      >
        <h2 className="text-sm text-gray-500">Services</h2>
        <p className="font-accent text-4xl font-bold">Lorem Ipsum Dolor Sit</p>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          ab dolorem! Architecto itaque aperiam amet id, fuga maiores. Placeat
          enim, sunt fugit labore quasi qui.
        </p>
      </motion.div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[1000px]">
        {options.map((option, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.125, type: "tween" }}
            className="flex flex-col gap-2 p-5 shadow-lg rounded-lg border"
          >
            <img className="h-[200px]" src={option.image} alt={option.title} />
            <div className="max-w-[500px] md:max-w-auto">
              <h3 className="font-accent text-xl font-bold text-center">
                {option.title}
              </h3>
              <p className="text-sm text-gray-700">{option.text}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Options;
