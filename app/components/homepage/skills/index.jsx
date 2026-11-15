// @flow strict

import { skillsCategories } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="relative z-30 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-32 lg:scroll-mt-36">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-medium">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:gap-14 my-8 lg:my-12">
        {skillsCategories.map((category) => (
          <div key={category.title} className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-violet-500/40 via-[#25213b] to-transparent"></div>
              <span className="text-xs text-[#16f2b3] font-mono px-2.5 py-1 rounded-md bg-[#1a1443] border border-violet-500/30 whitespace-nowrap">
                {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
              {category.skills.map((skill) => {
                const imageObj = skillsImage(skill);
                return (
                  <div
                    key={skill}
                    tabIndex={0}
                    className="group relative rounded-lg border border-[#1f223c] bg-[#11152c] transition-all duration-300 hover:border-violet-500 hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
                  >
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-4 sm:p-6">
                      <div className="h-8 sm:h-10 flex items-center justify-center">
                        {imageObj?.src && (
                          <Image
                            src={imageObj.src}
                            alt={skill}
                            width={40}
                            height={40}
                            className="h-full w-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        )}
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium text-center">
                        {skill}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
