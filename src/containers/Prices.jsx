// React Icons
import React from "react";

// Icons
import { BsCurrencyBitcoin } from "react-icons/bs";

const Prices = () => {
  return (
    <section className="bg-filler text-white w-full px-4 py-7 flex flex-col sm:flex-row items-center justify-evenly flex-wrap gap-2">
      <div className="flex items-center gap-1 font-accent text-2xl md:text-xl">
        <BsCurrencyBitcoin size={40} /> BTC /
      </div>
      <ol className="flex gap-3 md:gap-10 text-sm">
        <li className="flex flex-col items-center text-center">
          <p className="font-bold font-accent">LAST</p>
          <p>$9,9230</p>
        </li>
        <li className="flex flex-col items-center text-center">
          <p className="font-bold font-accent">24H CHANGE</p>
          <p>%15.05</p>
        </li>
        <li className="flex flex-col items-center text-center">
          <p className="font-bold font-accent">VOLUME</p>
          <p>1.000.000+</p>
        </li>
      </ol>
    </section>
  );
};

export default Prices;
