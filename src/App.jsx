import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import ContactUS from "./Pages/ContactUS";
import OurService from "./Pages/OurService";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Partners from "./Components/Partners.jsx";
import ServiceDetail from "./Pages/Services_Detail.jsx";
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Hero /><Partners /><HomePage /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/services" element={<OurService />} />
            <Route path="/service_detail" element={<ServiceDetail/>}/>
            <Route path="*" element={<h1 className="text-center py-20 text-2xl items-center mt-5">404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
