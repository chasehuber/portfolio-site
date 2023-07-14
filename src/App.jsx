import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Earth from './components/Earth'
import About from './components/About'
import ProjectHolder from './components/ProjectHolder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <NavBar />
      <div id="container">
        <Earth />
      </div>
      <About />
      <hr className="my-1 w-1/2 mx-auto"/>
      <ProjectHolder />
    </div>
  )
}

export default App
