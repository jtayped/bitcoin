// React Util
import React from "react";

// Images
import AboutIMG from "../assets/section1/SideImage.svg";

const About = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full justify-center items-center max-w-[1000px] py-10 px-8 font-primary">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-sm text-gray-500">About</h2>
          <p className="font-accent text-4xl font-bold">
            Lorem Ipsum Dolor Sit Amet Consectetur
          </p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, beatae explicabo? Voluptates hic totam aut soluta
            maiores repudiandae, laudantium fuga nam eligendi! Numquam, velit
            ratione rerum, laudantium ab consequatur, a vitae ex at nisi atque
            corporis quibusdam aliquid enim? Eos.
          </p>
          <div className="flex items-center gap-2 text-white font-accent mt-4">
            <button className="border border-accent bg-accent px-3 py-1 rounded">
              Download
            </button>
            <button className="border border-accent text-accent px-3 py-1 rounded">
              Learn More
            </button>
          </div>
        </div>
        <img src={AboutIMG} alt="" />
      </div>
    </section>
  );
};

export default About;
