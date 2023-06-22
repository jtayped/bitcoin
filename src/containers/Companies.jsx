// React Util
import React from "react";
import { useInView } from "react-intersection-observer";

// Animations
import { motion } from "framer-motion";

const Companies = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-accent w-full px-4 py-10 flex justify-evenly flex-wrap gap-2"
    >
      {[1, 2, 3, 4, 5].map((company, index) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.125 }}
          key={index}
          className="text-2xl font-accent text-white font-extrabold list-none"
        >
          COMPANY
        </motion.li>
      ))}
    </section>
  );
};

export default Companies;
