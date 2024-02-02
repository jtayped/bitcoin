// React Util
import React, { useState, useEffect } from "react";

// JSX Components
import {
  Header,
  Hero,
  Companies,
  About,
  Prices,
  Exchange,
  Classes,
  Services,
  Footer,
} from "../containers";

// Axios
import axios from "axios";

const Home = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_volume=true"
        );
        setBitcoinData(response.data.bitcoin);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [bitcoinData]);

  return (
    <div className="font-primary bg-background text-text">
      <header>
        <Header />
        <Hero />
      </header>
      <Companies />
      <About />
      <Prices bitcoinData={bitcoinData} />
      <Exchange bitcoinData={bitcoinData} />
      <Classes />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
