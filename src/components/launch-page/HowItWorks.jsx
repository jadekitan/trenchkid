import React from "react";

const HowItWorks = () => {
  // Retaining your original steps and copy
  const steps = [
    {
      title: "Create Your Story",
      description: "Share your cause and why it matters.",
      count: "01",
    },
    {
      title: "Spread the Word",
      description: "Encourage friends and family to support your story.",
      count: "02",
    },
    {
      title: "Receive Funding",
      description: "Watch your story come to life as generous individuals contribute.",
      count: "03",
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="w-full py-24 md:py-32 bg-dark flex flex-col items-center font-custom"
    >
      <div className="max-w-6xl w-full px-6 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-trench-kid500 font-bold text-sm tracking-widest uppercase">
            The Mechanics
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            How It <span className="text-trench-kid099">Works</span>
          </h3>
          {/* Minimalist Accent Line */}
          <div className="w-16 h-1.5 bg-trench-kid099 rounded-full mt-2"></div>
          <p className="text-soft-grey text-lg max-w-2xl mt-4">
            Learn how you can make a difference in three simple steps:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-trench-kid500/50 transition-colors duration-500 relative overflow-hidden group shadow-3xl"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-trench-kid500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              {/* Oversized Typography for Step Number */}
              <span className="text-7xl font-bold text-trench-kid099/20 mb-6 group-hover:text-trench-kid099 group-hover:scale-110 transition-all duration-500 z-10">
                {step.count}
              </span>
              
              <h4 className="text-2xl font-bold text-white mb-4 z-10 tracking-wide">
                {step.title}
              </h4>
              
              <p className="text-soft-grey text-base leading-relaxed z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Original CTA Button */}
        <a
          href="#community"
          className="inline-block bg-trench-kid500 hover:bg-trench-kid700 text-white px-10 py-4 rounded-lg font-bold text-xl tracking-wide transition-all duration-300 shadow-3xl hover:shadow-4xl"
        >
          Create Your Own Story
        </a>

      </div>
    </section>
  );
};

export default HowItWorks;