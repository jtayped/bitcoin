import React from "react";

const Companies = () => {
  return (
    <section className="bg-accent w-full px-4 py-10 flex justify-evenly flex-wrap gap-2">
      {[1, 2, 3, 4, 5].map((company, index) => (
        <li
          key={index}
          className="text-2xl font-accent text-white font-extrabold list-none"
        >
          COMPANY
        </li>
      ))}
    </section>
  );
};

export default Companies;
