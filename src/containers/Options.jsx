// React Util
import React from "react";

// Images
import { options } from "../constants/Options";

const Options = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-10">
      <div className="text-center max-w-[500px]">
        <h2 className="text-sm text-gray-500">Options</h2>
        <p className="font-accent text-4xl font-bold">Lorem Ipsum Dolor Sit</p>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          ab dolorem! Architecto itaque aperiam amet id, fuga maiores. Placeat
          enim, sunt fugit labore quasi qui.
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-3 max-w-[1000px]">
        {options.map((option, index) => (
          <li className="flex flex-col gap-2 p-5 shadow-lg rounded-lg border">
            <img className="h-[200px]" src={option.image} alt={option.title} />
            <div>
              <h3 className="font-accent text-xl font-bold text-center">
                {option.title}
              </h3>
              <p className="text-sm text-gray-700">{option.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
