
import React from "react";
import { ArrowRight } from "lucide-react";

const AnimatedFooter = () => {
  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px'
          }}
        />
      </div>
      
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[12rem] md:text-[20rem] font-bold text-white opacity-5 select-none whitespace-nowrap">
          Get a Quote
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-left mb-8">
          <p className="text-white text-lg mb-2">vide infra</p>
          <div className="text-gray-400 text-sm space-y-1">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Behance</p>
            <p>Dribbble</p>
            <p>Medium</p>
          </div>
        </div>
        
        {/* Animated Circular Button */}
        <div className="relative group">
          {/* Circular Text Path */}
          <div className="absolute inset-0 w-32 h-32 animate-spin-slow group-hover:animate-spin-fast transition-all duration-500">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circle-path"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="text-[8px] fill-white font-medium tracking-wider">
                <textPath href="#circle-path" startOffset="0%">
                  Thanks for your support • Thanks for your support • 
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Central Button */}
          <button className="relative w-32 h-32 bg-black rounded-full flex items-center justify-center border-2 border-white/20 hover:border-white/40 transition-all duration-300 group">
            <ArrowRight 
              className="w-6 h-6 text-white transform group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out group-hover:animate-spin" 
            />
          </button>
        </div>
        
        {/* Download Section */}
        <div className="absolute right-8 top-8 text-right">
          <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-black rotate-45" />
            </div>
            <div>
              <p className="text-sm font-medium">Download Presentation</p>
              <p className="text-xs text-gray-400">PDF • 3 MB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFooter;
