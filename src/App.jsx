import { useState } from 'react'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/heroBanner/Hero';
import Benefits from './pages/benefits/Index';
import OurClasses from './pages/ourClasses/Index';
import ContactUs from './pages/contactUs/ContactUs';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
      </div>
  )
}

export default App
