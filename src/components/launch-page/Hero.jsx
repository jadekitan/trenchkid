import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import NavBar from "../reuseable/NavBar";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Replace this ID with your actual YouTube video ID
  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    // NOTE: If the image's focal point is at the top, change "bg-center" to "bg-top" or "bg-[50%_20%]" here
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat font-custom">
      {/* NavBar Container */}
      <div className="absolute top-0 w-full z-40 transition duration-1000 ease-in-out">
        <NavBar />
      </div>

      {/* Main Content */}
      {/* REMOVED mt-16 md:mt-20 to restore perfect vertical balance */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        {/* Scaled Typography for Mobile vs Desktop */}
        <h1 className="text-white font-custom text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg mb-4 md:mb-6">
          Reshaping futures, <br className="hidden md:block" />
          <span className="text-trench-kid099">one child at a time</span>
        </h1>

        <h4 className="text-soft-grey font-custom text-md sm:text-lg md:text-xl font-normal leading-relaxed tracking-wide mb-8 md:mb-12 max-w-3xl">
          <span className="text-trench-kid50 font-bold">
            Breaking Cycles. Building Futures.{" "}
          </span>
          <br className="hidden md:block" />
          Supporting vulnerable children through education, mentorship, and
          care. <br className="hidden md:block" />
          Join Us in Making a Difference!
        </h4>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-transparent border border-trench-kid500 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:bg-trench-kid500/20"
          >
            <div className="bg-trench-kid500 text-white p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="ml-1 text-sm" />
            </div>
            <span className="font-custom font-semibold tracking-wide text-lg">
              Background Story
            </span>
          </button>

          {/* Updated Donate Link */}
          <a
            href="mailto:trenchkidproject@gmail.com?subject=Donation Inquiry - The Trench Kid Project"
            className="w-full sm:w-[174px] h-[58px] flex justify-center items-center bg-trench-kid500 rounded-lg text-white font-custom text-xl font-bold tracking-wide hover:bg-trench-kid700 transition-colors duration-300 shadow-3xl hover:shadow-4xl"
          >
            Donate
          </a>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-sm transition-opacity duration-300 px-2 sm:px-0">
          <div className="relative w-full max-w-5xl px-2 md:px-8">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-2 md:right-8 text-soft-grey hover:text-white transition-colors duration-200 p-2"
              aria-label="Close Video"
            >
              <FaTimes className="text-2xl md:text-3xl drop-shadow-md" />
            </button>

            {/* 16:9 Video Container */}
            <div className="relative pt-[56.25%] w-full rounded-xl overflow-hidden shadow-5xl bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Trench Kid Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
