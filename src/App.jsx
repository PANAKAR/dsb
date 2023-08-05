import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Feedbacks from "./components/Feedbacks"
import Contact from "./components/Contact"
import StarsCanvas from "./components/StarsCanvas"
import Services from "./components/Services"
import { motion } from "framer-motion"
import { slideIn } from "./utils/motion"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Services />
        <Feedbacks />
        <div className="relative z-0 ">
         
          <Contact classname="z-10" style={{zIndex: "10"}}/>
          <StarsCanvas className="hidden-xs hidden-m"style={{zIndex: "10"}}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
