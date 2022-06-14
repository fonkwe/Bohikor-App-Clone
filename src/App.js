import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Header from './components/Header'
import WhyBohikor from './components/WhyBohikor'
import Footer from './components/Footer'
import Features from './pages/Features'
import MoneyTherapy from './pages/MoneyTherapy'
import BohikorScore from './pages/Bohikor Score'
import FAQs from './pages/FAQs'
import{ BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <WhyBohikor />
      <Features />
      <MoneyTherapy />
      <BohikorScore />
      <FAQs />
      <Footer />
      
    </Router>
  );
}

export default App;
