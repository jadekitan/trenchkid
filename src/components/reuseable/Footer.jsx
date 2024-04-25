import React from "react";
import FullLogo from "/src/assets/full-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import Illustration from "/src/assets/illustrations/footer.svg";

const QuickLinks = ["Home", "Discover", "About Us", "Contact Us"];
const Legal = ["Privacy Policy", "Terms of Services"];
const footerDate = new Date().getFullYear();
const copyRight = () => {
  return "© " + footerDate + " The Trench Kid |";
};

const Footer = () => {
  return (
    <footer className=" w-full h-96 flex flex-col items-start gap-10">
      <img src={Illustration} alt="" className=" absolute left-0" />
      <div className=" inline-flex items-start gap-[60px]">
        <div className=" flex flex-col items-start gap-[31px]">
          <a href="" className=" flex items-center gap-2">
            <img src={FullLogo} alt="" className="w-[49px] h-[72.625px]" />
            <h6 className=" text-trench-kid500 text-center font-custom text-lg font-bold">
              The Trench Kid{" "}
              <span className=" text-trench-kid099">Project</span>
            </h6>
          </a>
          <div className=" flex items-start gap-[15px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className=" hover:text-trench-kid500" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaTwitter className=" hover:text-trench-kid500" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className=" hover:text-trench-kid500" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram className=" hover:text-trench-kid500" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-[10px]">
          <h5 className=" text-dark font-custom text-base font-bold leading-9 ">
            Contact Us:
          </h5>
          <h4 className=" text-dark font-custom text-[14px] font-normal leading-9">
            Phone: <a href="tel:+2348034270313">+234 803 427 0313</a>
          </h4>
        </div>
        <div className=" flex flex-col items-start gap-[10px]">
          <h5 className=" text-dark font-custom text-base font-bold leading-9 ">
            Quick Links:
          </h5>
          {QuickLinks.map((link, i) => {
            return (
              <a
                key={i}
                href=""
                className=" text-dark font-custom text-[14px] font-normal leading-9 hover:text-trench-kid099"
              >
                {link}
                {""}
              </a>
            );
          })}
        </div>
        <div className=" flex flex-col items-start gap-[10px]">
          <h5 className=" text-dark font-custom text-base font-bold leading-9 ">
            Legal
          </h5>
          {Legal.map((link, i) => {
            return (
              <a
                key={i}
                href=""
                className=" text-dark font-custom text-[14px] font-normal leading-9 hover:text-trench-kid099"
              >
                {link}
                {""}
              </a>
            );
          })}
        </div>
        <div className=" flex flex-col items-start gap-[10px]">
          <h5 className=" text-dark font-custom text-base font-bold leading-9 ">
            About Us
          </h5>
          <h4 className=" w-[186px] text-dark font-custom text-[14px] font-normal leading-9">
            You can contact Us to send email to us
          </h4>
          <form action="" className=" relative">
            <input
              type="email"
              className=" flex py-[7px] pl-3 pr-6 justify-end gap-[166px] rounded-[25px] bg-[#F5F5F5] font-custom placeholder:text-[12px] placeholder:font-normal"
              placeholder="Your email"
              required
            />
            <button
              type="submit"
              className=" absolute right-2 top-1 w-8 h-8 rounded-[25px] bg-trench-kid500 flex justify-center items-center"
            >
              <VscSend className=" text-white" />
            </button>
          </form>
        </div>
      </div>
      <div className=" w-full inline-flex flex-col items-center gap-[17px]">
        <img src="./src/assets/icons/footer-divider.svg" alt="" className="" />
        <p className=" text-[#0E0F1D] font-custom text-base font-normal">
          {copyRight()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
