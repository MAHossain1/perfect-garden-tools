import React from "react";
import Banner from "./Banner";
import Summary from "./Summary";
import Tools from "./Tools";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <WhyChooseUs></WhyChooseUs>
      <Summary></Summary>
    </div>
  );
};

export default Home;
