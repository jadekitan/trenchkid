"use client";

import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import Happy from "/src/assets/icons/happy.svg";

const DiscoverStory = () => {
  const stories = [
    {
      image: "/src/assets/banner/rutana town.jpg",
      title: "The young women in Rutana town, Burundi.",
      percent: 67,
      amount: 2570000,
      link: "",
    },
    {
      image: "/src/assets/banner/youngster.jpg",
      title: "Support the dreams of the youngstars",
      percent: 42,
      amount: 25000000,
      link: "",
    },
    {
      image: "/src/assets/banner/rutana town.jpg",
      title: "The young women in Rutana town, Burundi.",
      percent: 100,
      amount: 2570000,
      link: "",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className="flex flex-col items-center gap-[50px]">
      <div className=" flex flex-col items-center gap-5">
        <div className=" flex flex-col items-center gap-2">
          <h2 className=" text-trench-kid500 font-custom text-[40px] font-bold">
            Discover Top <span className=" text-trench-kid099">Stories</span>
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="193"
            height="12"
            viewBox="0 0 193 12"
            fill="none"
          >
            <path
              d="M1 5C0.447715 5 4.82823e-08 5.44772 0 6C-4.82823e-08 6.55228 0.447715 7 1 7L1 5ZM181.667 6.00002C181.667 8.94553 184.054 11.3333 187 11.3333C189.946 11.3334 192.333 8.94554 192.333 6.00002C192.333 3.0545 189.946 0.666683 187 0.666683C184.054 0.666683 181.667 3.0545 181.667 6.00002ZM1 7L187 7.00002L187 5.00002L1 5L1 7Z"
              fill="#FFBD59"
            />
          </svg>
        </div>
        <h4 className=" text-black text-center font-custom text-2xl font-normal leading-[50px]">
          Immerse yourself in the narratives that showcase the real impact of
          our work
        </h4>
      </div>
      <div className=" flex items-start gap-8">
        {stories.slice(index, index + 2).map((story, i) => {
          return (
            <div
              key={i}
              className=" w-full flex px-6 py-[34px] flex-col items-start gap-6 rounded-lg bg-white shadow-3xl"
            >
              <img
                src={story.image}
                alt=""
                className=" w-full h-[317px] rounded-lg"
              />
              <div className=" w-full flex justify-between  items-center">
                <p className=" text-black font-custom text-lg text-normal tracking-[-0.54px]">
                  {story.title}
                </p>
                <div className=" flex w-[120px] justify-center items-start gap-2">
                  <img src={Happy} alt="" />
                  <p className="text-black font-custom text-[15px] text-normal tracking-[-0.439px]">
                    {story.percent}% Raised
                  </p>
                </div>
              </div>
              <div className=" w-full flex justify-between items-center gap-[35px]">
                <div className=" w-[340px] h-[9px] rounded-2xl bg-trench-kid500"></div>
                <p className="text-black font-custom text-[16px] font-bold tracking-[-0.478px]">
                  &#8358;{story.amount.toLocaleString("en-US")}
                </p>
              </div>
              <button
                onClick={() => {
                  window.location.assign(story.link);
                }}
                className=" w-[476px] h-[50px] flex py-[10px] px-[22px] justify-center items-center gap-2 rounded-lg bg-trench-kid500 text-white font-custom text-[28px] font-bold leading-6 text-center tracking-[-0.84px] hover:bg-trench-kid700"
              >
                <span>Learn More</span>
                <MdOutlineArrowOutward />
              </button>
            </div>
          );
        })}
      </div>
      <div className=" flex items-center gap-[100px]">
        <div
          className={`w-11 h-11 flex items-center ${
            index > 1 && "rounded-full bg-trench-kid50"
          }`}
        >
          <IoIosArrowBack
            size={"35px"}
            className={`text-trench-kid500 ${index === 0 && "opacity-20"}`}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 2);
              }
            }}
          />
        </div>
        <div
          className={`w-11 h-11 ${
            index < stories.length - 2 && "rounded-full bg-trench-kid50"
          } flex justify-center items-center`}
        >
          <IoIosArrowForward
            size={"35px"}
            className={`text-trench-kid500 ${
              index >= stories.length - 2 && "opacity-20"
            }`}
            onClick={() => {
              if (index < stories.length - 2) {
                setIndex(index + 2);
              }
            }}
          />
        </div>
      </div>

      <div className=" flex flex-col items-center gap-5">
        <h3 className=" w-full text-black text-center font-custom text-[24px] font-normal leading-[38px]">
          {" "}
          <span className=" text-trench-kid099 text-[26px] font-bold">
            Explore the transformative{" "}
          </span>
          journeys of individuals and communities touched by our charity's work.
          From heart warming success stories to inspiring testimonials, dive
          into the meaningful impact made possible by your support.
        </h3>
        <button
          onClick={() => {
            window.location.assign("");
          }}
          className="h-[50px] flex py-[0] px-[38px] justify-center items-center gap-2 rounded-lg bg-trench-kid500 text-white text-2xl font-normal text-center tracking-[-0.48px] font-custom hover:bg-trench-kid700"
        >
          Discover More Stories
        </button>
      </div>
    </section>
  );
};

export default DiscoverStory;
