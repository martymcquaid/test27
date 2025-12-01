import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Services from './pages/Services'; 
import Gallery from './pages/Gallery'; 
import Contact from './pages/Contact'; 
import Footer from './components/Footer'; 

// Get the base path from Vite's import.meta.env.BASE_URL (no trailing slash for React Router)
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

const App = () => { 
  return ( 
    <Router basename={basePath}> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
      <Footer /> 
    </Router> 
  ); 
}; 

export default App;