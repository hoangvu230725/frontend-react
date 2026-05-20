import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Homebanner from './components/HomeBanner';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'; 
import Contact from './components/Contact'; 
import './App.css';
import Payment from "./components/Payment";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div>
        <Navbar 
          setSelectedCategory={setSelectedCategory} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <Routes>
          <Route path="/" element={<Homebanner />} />
          <Route 
            path="/products/:categoryId?" 
            element={
              <ProductList 
                selectedCategory={selectedCategory} 
                searchQuery={searchQuery} 
              />
            } 
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
         <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/payment" element={<Payment />} />
        </Routes>
            <br />
        <Footer />
      </div>
    </Router>
  );
};
// Khi phần tử có class fadeUpOnScroll nằm trong viewport thì thêm class active
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fadeUpOnScroll');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

export default App;
