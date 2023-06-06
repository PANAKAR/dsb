import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Feedbacks from "./components/Feedbacks"
import Contact from "./components/Contact"
import StarsCanvas from "./components/StarsCanvas"
import Services from "./components/Services"
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
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}>
            <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl" style={{width: "1200px"}}>
              <div class="flex-shrink-0">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2021/01/27/doodle-exclamation-mark-Graphics-8127361-1.jpg" alt="" className="" style={{width: "95px"}} />
              </div>
              <div class="ml-6 pt-1">
                <h4 class="text-xl text-gray-900">DSB Media</h4>
                <p class="text-base text-gray-600">Fill out our contact form today and let us bring our top-notch services to your doorstep, tailored to meet your unique needs and unlock new opportunities for success!</p>
              </div>
            </div>
          </motion.div>
          <Contact classname="z-10" style={{zIndex: "10"}}/>
          <StarsCanvas className="hidden-xs hidden-m"style={{zIndex: "10"}}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
