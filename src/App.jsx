// import { useState } from "react";
import React from "react";
import "./App.css";
import Hero from "./components/landing-page/Hero";
import Welcome from "./components/landing-page/Welcome";
import DiscoverStory from "./components/landing-page/DiscoverStory";
import Categories from "./components/landing-page/Categories";
import HowItWorks from "./components/landing-page/HowItWorks";
import Testimonial from "./components/landing-page/Testimonial";
import Subscribe from "./components/landing-page/Subscribe";
import Footer from "./components/reuseable/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <div className="px-[100px] pt-[110px] flex flex-col items-center gap-[110px]">
        <Welcome />
        <DiscoverStory />
        <Categories />
        <HowItWorks />
        <Testimonial />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
