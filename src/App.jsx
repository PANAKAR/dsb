import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import { BrowserRouter as Router,  Link, Route, Routes} from "react-router-dom"

const App = () => {
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-white bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/collections" element={<Services />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
