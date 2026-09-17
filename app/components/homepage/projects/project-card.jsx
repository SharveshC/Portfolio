// @flow strict

import * as React from 'react';
import { FaGithub, FaPlay, FaStore } from 'react-icons/fa';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
        <div className="flex flex-row space-x-2 absolute right-4 lg:right-8 top-1/2 -translate-y-1/2">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[10px] lg:text-xs px-2 lg:px-4 py-1 lg:py-1.5 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-colors">
              <FaPlay className="text-[10px] lg:text-xs" />
              <span>Live Demo</span>
            </a>
          )}
          {project.marketplace && (
            <a href={project.marketplace} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[9px] lg:text-[11px] px-1.5 lg:px-3 py-0.5 lg:py-1 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-colors">
              <FaStore className="text-[9px] lg:text-[11px]" />
              <span>MarketPlace ↗</span>
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[10px] lg:text-xs px-2 lg:px-4 py-1 lg:py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors">
              <FaGithub className="text-[12px] lg:text-sm" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          {project.adoption && (
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">adoption:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.adoption}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>
          )}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;