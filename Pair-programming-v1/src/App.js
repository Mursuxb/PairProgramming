import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./app.css";
import Contact from './components/Contact';
import Registration from './components/Registeration';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* Added other routes if you want*/}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
