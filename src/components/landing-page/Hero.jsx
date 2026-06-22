import React from "react";
import NavBar from "../reuseable/NavBar";

const Hero = () => {
  return (
    <section className=" w-full h-screen relative bg-hero-pattern">
      <div className=" fixed z-50 transition duration-1000 ease-in-out">
        <NavBar />
      </div>
      <div className=" w-[615px] absolute top-[230px] left-[100px] inline-flex flex-col items-start gap-10">
        <h1 className=" text-white font-custom text-[46px] font-normal leading-[60px] tracking-[-1.5px]">
          Reshaping futures,{" "}
          <span className=" text-trench-kid099 font-custom text-[58px] font-bold leading-[60px]">
            one child at a time
          </span>
        </h1>
        <h4 className=" text-white font-custom text-3xl font-normal leading-[36px] tracking-[-0.9px]">
          Transforming lives, one smile at a time.
          <br />
          Join Us in Making a Difference!
        </h4>
        <button
          onClick={() => {
            window.location.assign("");
          }}
          className=" flex w-[174px] h-11 flex-col justify-center items-center gap-1 bg-trench-kid500 rounded-lg text-white font-custom text-xl font-bold leading-[30px] tracking-[-0.78px] hover:bg-trench-kid700"
        >
          Donate
        </button>
      </div>
    </section>
  );
};

export default Hero;
