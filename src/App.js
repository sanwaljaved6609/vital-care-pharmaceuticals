import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <WhatsAppWidget />
      <Footer />
    </Router>
  );
}



export default App;