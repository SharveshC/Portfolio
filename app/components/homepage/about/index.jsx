// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-1 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="order-2 lg:order-2 flex flex-col gap-6">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            What I Build
          </p>
          <div className="flex flex-col gap-4">
            <div className="group border-b border-[#1b2c68a0] pb-4 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="font-mono text-pink-500 font-bold mt-1">01</span>
                <div className="flex flex-col">
                  <span className="text-white text-base lg:text-lg tracking-wide uppercase transition-colors group-hover:text-amber-300">Web Applications</span>
                  <span className="text-gray-400 font-mono text-sm mt-1">Building practical full-stack products</span>
                </div>
              </div>
            </div>
            
            <div className="group border-b border-[#1b2c68a0] pb-4 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="font-mono text-violet-500 font-bold mt-1">02</span>
                <div className="flex flex-col">
                  <span className="text-white text-base lg:text-lg tracking-wide uppercase transition-colors group-hover:text-[#16f2b3]">Developer Tools</span>
                  <span className="text-gray-400 font-mono text-sm mt-1">Automating and improving developer workflows</span>
                </div>
              </div>
            </div>
            
            <div className="group pb-4 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="font-mono text-orange-400 font-bold mt-1">03</span>
                <div className="flex flex-col">
                  <span className="text-white text-base lg:text-lg tracking-wide uppercase transition-colors group-hover:text-pink-500">Software Projects</span>
                  <span className="text-gray-400 font-mono text-sm mt-1">Exploring ideas through hands-on engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;