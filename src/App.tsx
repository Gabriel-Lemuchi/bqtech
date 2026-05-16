import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'


function App() {

  return (
    <>
      <header>
        <img src='/BQ_Tech.jpeg' width="70px"/>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
