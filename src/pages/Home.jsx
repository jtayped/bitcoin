// React Util
import React from "react";

// JSX Components
import {
  Header,
  Hero,
  Companies,
  About,
  Prices,
  Exchange,
  Classes,
  Options,
  Footer,
} from "../containers";

const Home = () => {
  return (
    <div className="font-primary bg-background text-text">
      <header>
        <Header />
        <Hero />
      </header>
      <Companies />
      <About />
      <Prices />
      <Exchange />
      <Classes />
      <Options />
      <Footer />
    </div>
  );
};

export default Home;
