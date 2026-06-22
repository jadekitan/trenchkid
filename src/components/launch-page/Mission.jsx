import React from "react";
import discoverCard from "/src/assets/discover.jpg"; // Utilizing your existing asset

const Mission = () => {
  return (
    <section 
      id="mission" 
      className="w-full py-24 md:py-32 bg-dark flex justify-center items-center font-custom"
    >
      <div className="max-w-6xl px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Container with Cinematic Treatment */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-5xl z-10">
            {/* Subtle overlay to blend the image with the dark theme */}
            <div className="absolute inset-0 bg-dark/20 hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={discoverCard} 
              alt="Trench Kid Mission" 
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Ambient Glow Behind Image */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-trench-kid500 rounded-full blur-[80px] opacity-30 z-0"></div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
          <div className="flex flex-col items-start gap-2 mb-6">
            <h2 className="text-trench-kid500 font-bold text-sm tracking-widest uppercase">
              Our Mission
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Welcome to <br />
              <span className="text-trench-kid099">Trench Kid Project</span>
            </h3>
            {/* Minimalist Accent Line */}
            <div className="w-16 h-1.5 bg-trench-kid099 rounded-full mt-4"></div>
          </div>
          
          <div className="flex flex-col gap-6">
            <p className="text-soft-grey text-lg md:text-xl leading-relaxed">
              Here, we invite you to embark on a journey of exploration and connection. Dive deep into the heart of our mission as we unveil inspiring stories, impactful projects, and the incredible individuals who form the backbone of our community.
            </p>
            
            <p className="text-soft-grey text-lg md:text-xl leading-relaxed">
              Explore the transformative journeys of individuals and communities touched by our charity's work. From heartwarming success stories to inspiring testimonials, dive into the meaningful impact made possible by your support.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Mission;