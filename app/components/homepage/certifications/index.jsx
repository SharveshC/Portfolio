// @flow strict

import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import lottieFile from '../../../assets/lottie/build.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-30 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-32 lg:scroll-mt-36">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {certifications.map((cert) => (
                <GlowCard key={cert.id} identifier={`certification-${cert.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full">
                      <p className="text-xs sm:text-sm text-[#16f2b3] sm:ml-20">
                        {cert.issuer}{cert.issuedBy ? ` · ${cert.issuedBy}` : ''}
                      </p>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${cert.title} certificate (opens in new tab)`}
                        className="flex items-center gap-1 text-[10px] lg:text-xs px-2 lg:px-4 py-1 lg:py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors relative z-10 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                      >
                        <FaExternalLinkAlt className="text-[12px] lg:text-sm" />
                        <span>Certificate</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-3">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <FaAward size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {cert.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
