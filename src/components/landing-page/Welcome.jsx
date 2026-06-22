import React from "react";
import discoverCard from "/src/assets/discover.jpg";
import discoverIcon from "/src/assets/icons/discover.svg";

const Welcome = () => {
  return (
    <section className=" flex w-full flex-col items-center gap-y-12">
      <div className="flex flex-col items-center">
        <h2 className=" text-trench-kid500  font-custom text-[40px] text-bold ">
          {" "}
          Welcome to{" "}
          <span className=" text-trench-kid099">Trench Kid Project</span>
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
      <div className=" flex w-full justify-center items-center gap-[58px] rounded-2 ">
        <div className=" relative flex w-[519px] h-[417px] ">
          <img
            className="w-full h-full rounded-lg "
            src={discoverCard}
            alt="Explore"
          />
          <img
            src={discoverIcon}
            alt="Discover Icon"
            className=" absolute right-0 z-10"
          />
        </div>
        <h3 className=" w-[544px] text-black font-custom text-[26px] text-normal leading-[38px] tracking-[-0.84px]">
          <span className=" text-trench-kid099 text-[32px] font-bold tracking-[-1.02px]">
            Here
          </span>
          , we invite you to embark on a journey of exploration and connection.
          Dive deep into the heart of our mission as we unveil inspiring
          stories, impactful projects, and the incredible individuals who form
          the backbone of our community.
        </h3>
      </div>
    </section>
  );
};

export default Welcome;
