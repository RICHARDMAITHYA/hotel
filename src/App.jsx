
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';


function App() {
  return (
    <BrowserRouter>
<Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
  <Route path="/reservations" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
