// @flow strict

import { skillsCategories } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="relative z-30 border-t my-8 lg:my-14 border-[#25213b] scroll-mt-32 lg:scroll-mt-36">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-4 lg:py-4">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-medium">
            Skills
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6 my-4 lg:my-6">
        {skillsCategories.map((category, idx) => {
          const categoryColors = [
            { border: 'hover:border-pink-500', text: 'text-pink-300', ring: 'focus-visible:ring-pink-500', bg: 'hover:bg-[#1a0f1a]' },
            { border: 'hover:border-violet-500', text: 'text-violet-300', ring: 'focus-visible:ring-violet-500', bg: 'hover:bg-[#151a37]' },
            { border: 'hover:border-[#16f2b3]', text: 'text-[#16f2b3]', ring: 'focus-visible:ring-[#16f2b3]', bg: 'hover:bg-[#0a1f1a]' },
            { border: 'hover:border-amber-400', text: 'text-amber-300', ring: 'focus-visible:ring-amber-400', bg: 'hover:bg-[#1f1a0a]' },
          ];
          const colors = categoryColors[idx % categoryColors.length];
          
          return (
            <div
              key={category.title}
              className={`w-full flex flex-col items-center gap-2.5 sm:gap-3 ${
                idx > 0 ? "pt-4 sm:pt-5 border-t border-[#1f223c]/40" : ""
              }`}
            >
              <h3 className={`text-base sm:text-lg lg:text-xl font-semibold tracking-wide text-center ${colors.text}`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {category.skills.map((skill) => {
                  const imageObj = skillsImage(skill);
                  return (
                    <div
                      key={skill}
                      tabIndex={0}
                      className={`group flex items-center gap-2 rounded-md border border-[#1f223c] bg-[#11152c] px-2.5 py-1.5 sm:px-3 sm:py-1.5 transition-all duration-300 ${colors.border} ${colors.bg} focus-visible:outline-none focus-visible:ring-1 ${colors.ring} cursor-default hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center shrink-0">
                        {imageObj?.src && (
                          <Image
                            src={imageObj.src}
                            alt={skill}
                            width={18}
                            height={18}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
