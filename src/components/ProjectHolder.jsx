import React from "react";
import Project from "./Project";

function ProjectHolder() {
  return (
    <div id="projects" className="mb-4">
      <p className="text-white text-center p-2">My Projects</p>
      <div className="grid grid-rows-2 grid-cols-2 gap-2 w-4/6 mx-auto">
        <Project 
          projectName={"Trout Clicker"} 
          projectLink={"https://troutclicker.com/"}
          projectDesc={"An idle clicker game about clicking a Trout and buying upgrades to earn more trout. Built using React, JavaScript, and Vite"}
        />
        <Project 
          projectName={"Vomit Page"} 
          projectLink={"https://github.com/chasehuber/phase-5-project"}
          projectDesc={"A group chatting application built as my final project for Flatiron School. Built using React, JavaScript, Ruby, and Rails"}
        />
        <Project 
          projectName={"PupHub"} 
          projectLink={"https://github.com/chasehuber/phase-4-project"}
          projectDesc={"A forum for dog owners to discuss all things canine, built for Phase 4 of Flatiron School. Built using React, JavaScript, Ruby, and Rails"}
        />
        <Project 
          projectName={"Tatiana's Code Challenge"} 
          projectLink={"https://github.com/Irishwolf13/Project3"}
          projectDesc={"An app for users to complete daily code challenges. Built for Phase 3 of Flatiron School using, React, Javascript, and Ruby"}
        />
      </div>
    </div>
  )
}

export default ProjectHolder