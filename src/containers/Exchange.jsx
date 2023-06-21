// React Util
import React, { useState } from "react";

// Images
import Image from "../assets/section2/Main.svg";

const Exchange = () => {
  const [nBitcoin, setNBitcoin] = useState(1);

  function handleNumberChange(value) {
    if (value) {
      setNBitcoin(value);
    } else {
      setNBitcoin(1);
    }
  }
  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex flex-col items-center text-center gap-2 max-w-[500px]">
        <img src={Image} alt="" />
        <h2 className="text-sm text-gray-500">About</h2>
        <p className="font-accent text-4xl font-bold">Lorem Ipsum Dolor</p>
        <p className="text-sm text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          veniam labore alias rem praesentium provident. Architecto alias quas
          delectus dolorum, ea sed dolor fuga harum enim, minima unde quam
          officiis nam quos tenetur! Reiciendis blanditiis tempore aspernatur
          esse quod mollitia!
        </p>
        <div className="flex items-center gap-3 md:gap-10">
          <div className="flex items-center gap-2">
            <div className="border border-accent p-1 md:p-2 rounded w-min text-2xl">
              <input
                className="w-[50px] outline-none bg-transparent placeholder:text-black"
                type="number"
                placeholder="1"
                onChange={(e) => handleNumberChange(e.target.value)}
              />
            </div>
            <p className="text-xl">BTC</p>
          </div>

          <div className="w-5 md:w-7 h-full flex flex-col justify-center gap-2.5 md:gap-3">
            <div className="h-[2px] bg-black" />
            <div className="h-[2px] bg-black" />
          </div>

          <div className="flex items-center gap-2">
            <div className="border p-1 md:p-2 border-accent rounded text-2xl">
              <p>{(nBitcoin * 30206.7).toFixed(2)}</p>
            </div>
            <p className="text-xl">USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
