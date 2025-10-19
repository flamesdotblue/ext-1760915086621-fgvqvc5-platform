import React from 'react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Hero />
      <Capabilities />
      <UseCases />
      <Footer />
    </div>
  );
}
