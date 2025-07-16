// import { Home } from "lucide-react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
