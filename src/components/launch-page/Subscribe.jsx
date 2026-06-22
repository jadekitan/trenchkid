import React, { useState } from "react";
import FullLogo from "/src/assets/full-logo.svg";
import { supabase } from "../../supabaseClient"; // Import your Supabase client

const Subscribe = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  const [status, setStatus] = useState("idle"); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Insert data into the 'subscribers' table in Supabase
      const { error } = await supabase
        .from('subscribers')
        .insert([
          { full_name: formData.fullName, email: formData.email }
        ]);

      if (error) {
        // Handle duplicate emails gracefully
        if (error.code === '23505') {
          setErrorMessage("You're already on the waitlist!");
        } else {
          setErrorMessage(error.message);
        }
        setStatus("error");
      } else {
        setStatus("success");
        setFormData({ fullName: "", email: "" });
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section 
      id="community" 
      className="w-full py-24 md:py-32 bg-dark flex flex-col items-center font-custom relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-96 h-40 bg-trench-kid500 rounded-full blur-[120px] opacity-10 z-0"></div>

      <div className="max-w-6xl w-full px-6 flex flex-col items-center z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-trench-kid500 font-bold text-sm tracking-widest uppercase">Community</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Join the <span className="text-trench-kid099">Movement</span>
          </h3>
          <div className="w-16 h-1.5 bg-trench-kid099 rounded-full mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 w-full">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="w-48 h-auto p-6 rounded-2xl bg-white/5 border border-white/10 shadow-3xl flex items-center justify-center">
              <img src={FullLogo} alt="Trench Kid Project Logo" className="w-full h-auto" />
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col items-start gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                Be Part of Reshaped Futures
              </h4>
              <p className="text-soft-grey text-lg leading-relaxed max-w-2xl">
                Your involvement is key to sustaining and expanding our impact. Join us in creating more success stories and be part of the change.
              </p>
            </div>

            {status === "success" ? (
              <div className="w-full max-w-xl p-6 rounded-lg bg-trench-kid500/20 border border-trench-kid500 text-white text-center">
                <p className="text-xl font-bold tracking-wide mb-2">Welcome to the trenches.</p>
                <p className="text-soft-grey">Your email has been securely added to the waitlist.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-[60px] px-6 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-soft-grey/50 font-medium focus:outline-none focus:border-trench-kid500 transition-colors duration-300"
                  placeholder="Fullname"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[60px] px-6 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-soft-grey/50 font-medium focus:outline-none focus:border-trench-kid500 transition-colors duration-300"
                  placeholder="Email"
                  required
                />
                
                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-[60px] flex justify-center items-center rounded-lg bg-trench-kid500 hover:bg-trench-kid700 text-white font-custom text-xl font-bold tracking-wide transition-all duration-300 shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;