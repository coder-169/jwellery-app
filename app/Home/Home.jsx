import React from "react";
import Hero from "../components/Hero";
import Page2 from "../components/Products";
import Page3 from "../components/Trade";
import Page4 from "../components/Team";
import Page5 from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer/>
    </div>
  );
};

export default Home;
