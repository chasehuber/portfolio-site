import React from "react";

function Project({ projectName, projectLink, projectDesc }) {
  return (
    <a href={projectLink}>
      <div className="text-white border-2 border-white border-solid hover:bg-gray-600 h-full">
          <p className="p-1 border-b-2 border-white bg-white text-black">{projectName}</p>
        <p className="p-1">{projectDesc}</p>
      </div>
    </a>
  )
}

export default Project