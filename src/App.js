import './App.css';
import Navbar from './componets/Navbar';
import About from './componets/About'
import Home from './componets/Home'
import Products from './componets/Products';
import Product from './componets/Product';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>

    </div>
  );
}

export default App;
