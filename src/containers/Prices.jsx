// React Icons
import React from "react";
import { useInView } from "react-intersection-observer";

// Icons
import { BsCurrencyBitcoin, BsArrowDownUp } from "react-icons/bs";

// Animations
import { motion } from "framer-motion";

const Prices = ({ bitcoinData }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section
      id="prices"
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
            ${bitcoinData ? bitcoinData.usd : 0}
          </motion.p>
        </li>
        <li className="flex flex-col items-center text-center">
          <p className="font-bold font-accent">24H CHANGE</p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.125 }}
            className={`flex items-center gap-1 ${
              bitcoinData
                ? bitcoinData.usd_24h_change > 0
                  ? "text-green-600"
                  : "text-red-600"
                : "aaaaaaaaa"
            }`}
          >
            {bitcoinData ? bitcoinData.usd_24h_change.toFixed(2) : 1}%
            <BsArrowDownUp />
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
