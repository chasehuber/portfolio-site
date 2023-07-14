import React from "react";

function NavBar() {
  return (
    <div className="text-white inline-block float-right p-1">
      <a href="#about" className="inline-block p-2 hover:underline">About</a>
      <a href="#projects" className="inline-block p-2 hover:underline">Projects</a>
      <a href="https://www.linkedin.com/in/chase-huber/" className="inline-block p-2 hover:underline">LinkedIn</a>
      <a href="https://github.com/chasehuber/" className="inline-block p-2 hover:underline">GitHub</a>
    </div>
  )
}

export default NavBar