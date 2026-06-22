import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Illustration from "/src/assets/illustrations/testimonial.svg";

const Testimonial = () => {
  const reviews = [
    {
      image: "./src/assets/testimonial/sarah-johnson.jpg",
      name: "Sarah Johnson 1",
      title: "Volunter",
      preStory: "Volunteering with",
      story:
        "has been a life-changing experience. The dedication of the team and the genuine commitment to making a difference are truly inspiring. It's heartening to witness the tangible impact we've had on the ground, and I'm proud to be part of this incredible community.",
      companySpan: "the TrenchKid Project",
    },
    {
      image: "./src/assets/testimonial/sarah-johnson.jpg",
      name: "Sarah Johnson 2",
      title: "Volunter",
      preStory: "Volunteering with",
      story:
        "has been a life-changing experience. The dedication of the team and the genuine commitment to making a difference are truly inspiring. It's heartening to witness the tangible impact we've had on the ground, and I'm proud to be part of this incredible community.",
      companySpan: "the TrenchKid Project",
    },
    {
      image: "./src/assets/testimonial/sarah-johnson.jpg",
      name: "Sarah Johnson 3",
      title: "Volunter",
      preStory: "Volunteering with",
      story:
        "has been a life-changing experience. The dedication of the team and the genuine commitment to making a difference are truly inspiring. It's heartening to witness the tangible impact we've had on the ground, and I'm proud to be part of this incredible community.",
      companySpan: "the TrenchKid Project",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className=" relative inline-flex flex-col justify-center items-start gap-[50px]">
      <img
        src={Illustration}
        alt=""
        className=" absolute top-0 right-[-100px]"
      />
      <div className=" flex  flex-col items-center gap-5">
        <div className=" flex flex-col items-center gap-2">
          <h2 className=" text-trench-kid500 font-custom text-[40px] font-bold">
            Testimonials
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="193"
            height="11"
            viewBox="0 0 193 11"
            fill="none"
          >
            <path
              d="M1 4.64648C0.447715 4.64648 4.82823e-08 5.0942 0 5.64648C-4.82823e-08 6.19877 0.447715 6.64648 1 6.64648L1 4.64648ZM181.667 5.6465C181.667 8.59202 184.054 10.9798 187 10.9798C189.946 10.9798 192.333 8.59202 192.333 5.6465C192.333 2.70098 189.946 0.313167 187 0.313167C184.054 0.313167 181.667 2.70098 181.667 5.6465ZM1 6.64648L187 6.6465L187 4.6465L1 4.64648L1 6.64648Z"
              fill="#FFBD59"
            />
          </svg>
        </div>
        <h4 className="w-full text-black text-center font-custom text-[22px] font-normal leading-[32px]">
          Discover the impact we've made together through the voices of those
          who have been part of our journey. These testimonials reflect the real
          stories of individuals and communities touched by your generosity and
          support.
        </h4>
      </div>
      {
        <div className=" flex  px-[3px] items-center gap-[50px]">
          <div className=" relative w-[400px] h-[536px]">
            <div className=" absolute top-[50px] flex  w-[400px] h-[413.552px] py-[30px] px-8 justify-center items-center gap-[10px] rounded-[30px] bg-white shadow-5xl z-10">
              <div className=" flex w-[333.716px ] h-full pb-[11.307px] flex-col items-center gap-5">
                <div className=" w-[333.716px] h-[290.991px]">
                  <img
                    src={reviews[index].image}
                    alt=""
                    className="w-full h-full rounded-[24px]"
                  />
                </div>
                <div className=" flex w-auto flex-col justify-center items-center gap-1">
                  <h4 className=" text-black font-custom text-[30px] font-normal leading-[31.755px]">
                    {reviews[index].name}
                  </h4>
                  <h5 className=" text-trench-kid099 font-custom text-2xl font-bold leading-[31.755px]">
                    {reviews[index].title}
                  </h5>
                </div>
              </div>
            </div>
            <div className=" absolute left-[100px] w-[206.696px] h-[535.794px] rounded-[30px] bg-trench-kid500"></div>
            <div className=" absolute left-[145px] bottom-[25px] inline-flex justify-center items-center gap-[29px] z-20">
              <FaFacebookF className="text-white" />
              <FaTwitter className="text-white" />
              <FaInstagram className="text-white" />
            </div>
          </div>
          <div className=" w-[664px] h-[299px]">
            <span className=" w-12 h-11 text-trench-kid099 text-center font-custom text-6xl font-bold leading-[88px] ">
              "
            </span>
            <h5 className=" text-black font-custom text-2xl font-normal leading-[34px]  ">
              {reviews[index].preStory}{" "}
              <span className=" text-trench-kid099">
                {reviews[index].companySpan}
              </span>{" "}
              {reviews[index].story}
            </h5>
            <div className=" w-full h-11 text-end">
              <span className=" w-12 text-trench-kid099 text-end font-custom text-6xl font-bold leading-[88px] ">
                "
              </span>
            </div>
          </div>
        </div>
      }
      <div
        className={` flex flex-row w-full justify-center gap-5 ${
          index > +2 && ""
        }`}
      >
        <button
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        >
          Back
        </button>
        <div className=" w-5 h-5 rounded-full bg-trench-kid500"></div>
        <div className=" w-5 h-5 rounded-full bg-trench-kid500"></div>
        <div className=" w-5 h-5 rounded-full bg-trench-kid500"></div>
        <button
          onClick={() => {
            if (index < reviews.length - 1) {
              setIndex(index + 1);
            }
          }}
        >
          Forward
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
