"user client";

import React from "react";
import Illustration from "/src/assets/illustrations/side-1.svg";

const Categories = () => {
  const categories = [
    {
      image: "/src/assets/categories/education.jpg",
      title: "Education",
    },
    {
      image: "/src/assets/categories/medical.jpg",
      title: "Medical",
    },
    {
      image: "/src/assets/categories/religion.jpg",
      title: "Religion",
    },
    {
      image: "/src/assets/categories/senior.jpg",
      title: "Seniors",
    },
  ];

  return (
    <div className=" relative inline-flex flex-col items-center gap-[50px]">
      <img
        src={Illustration}
        alt=""
        className=" absolute right-[-80px] top-[-150px] overflow-hidden"
      />
      <div className=" flex flex-col items-center gap-5">
        <div className="  flex flex-col items-center gap-2">
          <h2 className=" text-trench-kid500 font-custom text-[40px]  font-bold">
            Categories
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
        <h4 className=" text-black text-center font-custom text-2xl font-normal">
          Browse through different categories of stories
        </h4>
      </div>
      <div className=" flex  items-start gap-8">
        {categories.map((category, i) => {
          return (
            <div
              key={i}
              className=" flex w-64 flex-col items-center gap-[11.222px]"
            >
              <img
                src={category.image}
                alt=""
                className=" w-56 h-56 rounded-[224px] shadow-3xl"
              />
              <h4 className=" text-black text-center font-custom text-[30px] font-normal">
                {category.title}
              </h4>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          window.location.assign("");
        }}
        className="h-[50px] flex py-[0] px-[38px] justify-center items-center gap-2 rounded-lg bg-trench-kid500 text-white text-2xl font-normal text-center tracking-[-0.48px] font-custom hover:bg-trench-kid700"
      >
        Discover Categories
      </button>
    </div>
  );
};

export default Categories;
