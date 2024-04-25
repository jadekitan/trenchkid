"user client";

import React from "react";
import Illustration from "/src/assets/illustrations/side-2.svg";

const HowItWorks = () => {
  const steps = [
    {
      image: "/src/assets/steps/create.jpg",
      alt: "",
      title: "Create Your Story",
      description: "Share your cause and why it matters.",
      count: 1,
    },
    {
      image: "/src/assets/steps/share.jpg",
      alt: "",
      title: "Spread the Word",
      description: "Encourage friends and family to support your story.",
      count: 2,
    },
    {
      image: "/src/assets/steps/receive.jpg",
      alt: "",
      title: "Receive Funding",
      description:
        "Watch your story come to life as generous individuals contribute.",
      count: 3,
    },
  ];
  return (
    <div className=" relative inline-flex flex-col items-center gap-[50px]">
      <img
        src={Illustration}
        alt=""
        className=" absolute left-[-100px] top-[-150px]"
      />
      <div className=" flex flex-col items-center gap-5">
        <div className=" flex flex-col items-center gap-2">
          <h2 className=" text-trench-kid500 font-custom text-[40px] font-bold">
            How It <span className=" text-trench-kid099">Work's</span>
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
          Learn how you can make a difference in three simple steps:
        </h4>
      </div>
      <div className=" relative h-[360px] flex justify-center gap-[78px]">
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              className=" flex w-[306px]  flex-col justify-center items-center gap-6"
            >
              <div className=" relative w-[306px] h-[309px]">
                <img
                  src={step.image}
                  alt={step.alt}
                  className=" absolute top-[-31px] left-[60px] w-[174px] h-[174px] rounded-[164px] z-30"
                />
                <div className=" absolute bottom-0 inline-flex h-[214px] pt-[104px] pb-14 px-[38px] flex-col justify-end items-center gap-4 rounded-xl bg-white shadow-4xl z-20 text-center">
                  <h5 className=" text-black font-custom text-lg font-bold">
                    {step.title}
                  </h5>
                  <p className=" text-black font-custom text-sm font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
              <span className=" text-trench-kid500 font-custom text-[30px] font-bold">
                {step.count}
              </span>
            </div>
          );
        })}
        <div className=" absolute bottom-28 w-[1120px] h-36 rounded bg-trench-kid200 z-0"></div>
      </div>
      <button
        onClick={() => {
          window.location.assign("");
        }}
        className="h-[50px] flex py-[0] px-[38px] justify-center items-center gap-2 rounded-lg bg-trench-kid500 text-white text-2xl font-normal text-center tracking-[-0.48px] font-custom hover:bg-trench-kid700"
      >
        Create Your Own Story
      </button>
    </div>
  );
};

export default HowItWorks;
