// React Util
import React from "react";

// Images
import MainIMG from "../assets/section3/SideImage.webp";

const Classes = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-[1200px] py-10 px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center">
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
        </div>
        <img src={MainIMG} alt="" />
      </div>
    </section>
  );
};

export default Classes;
