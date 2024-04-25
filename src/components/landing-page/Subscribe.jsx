import React from "react";
import FullLogo from "/src/assets/full-logo.svg";

const Subscribe = () => {
  return (
    <section className=" inline-flex flex-col items-center gap-[50px]">
      <div className=" flex flex-col items-center gap-2">
        <h2 className=" text-trench-kid500 font-custom text-[40px] font-bold">
          Community
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
      <div className=" flex w-full items-center gap-24">
        <div className=" w-48 h-[284.571px]">
          <img src={FullLogo} alt="" className=" w-full h-full" />
        </div>
        <div className=" flex flex-col items-start gap-[50px]">
          <div className=" flex w-[829px] flex-col items-start gap-5">
            <h3 className=" w-[507px] text-black font-custom text-[52px] leading-[52px] ">
              Subscribe to Our Newsletter
            </h3>
            <p className=" w-[818.688px] text-black font-custom text-lg font-normal leading-[24px]">
              Your involvement is key to sustaining and expanding our impact.
              Join us in creating more success stories and be part of the change
            </p>
          </div>
          <form action="" className="flex flex-col items-start gap-5">
            <input
              type="text"
              className=" w-[634px]  h-[60px] py-[19.824px] pl-[29.499px] items-center rounded-lg border-[0.5px]"
              placeholder="Fullname"
              required
            />
            <input
              type="email"
              className=" w-[634px]  h-[60px] py-[19.824px] pl-[29.499px] items-center rounded-lg border-[0.5px]"
              placeholder="Email"
              required
            />
            <button
              type="submit"
              className=" flex w-[634px] h-[60px] justify-center items-center rounded-lg bg-trench-kid500 text-white font-custom text-[35px] font-bold hover:bg-trench-kid700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
