// React Icons
import React from "react";
import { useInView } from "react-intersection-observer";

// Icons
import { BsCurrencyBitcoin } from "react-icons/bs";

// Animations
import { motion } from "framer-motion";

const Prices = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-filler text-white w-full px-4 py-7 flex flex-col sm:flex-row items-center justify-evenly flex-wrap gap-2"
    >
      <div className="flex items-center gap-1 font-accent text-2xl md:text-xl">
        <BsCurrencyBitcoin size={40} /> BTC /
      </div>
      <ol className="flex gap-3 md:gap-10 text-sm">
        <li className="flex flex-col items-center text-center">
          <p className="font-bold font-accent">LAST</p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            $9,9230
          </motion.p>
        </li>
        <li className="flex flex-col items-center text-center">
          <p className="font-bold font-accent">24H CHANGE</p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.125 }}
          >
            %15.05
          </motion.p>
        </li>
        <li className="flex flex-col items-center text-center">
          <p className="font-bold font-accent">VOLUME</p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            1.000.000+
          </motion.p>
        </li>
      </ol>
    </section>
  );
};

export default Prices;
