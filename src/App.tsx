import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CoffeeBeverages } from './pages/CoffeeBeverages';
import { ProductDetail } from './pages/ProductDetail';
import { CoffeeBeans } from './pages/CoffeeBeans';
import { Equipment } from './pages/Equipment';
import { BrewingMethods } from './pages/BrewingMethods';
import { OurStory } from './pages/OurStory';
import { Contact } from './pages/Contact';
import { Auth } from './pages/Auth';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream font-cairo" dir="rtl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beverages" element={<CoffeeBeverages />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/beans" element={<CoffeeBeans />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/brewing" element={<BrewingMethods />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>);

}