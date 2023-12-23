import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black-900">
    <Navbar />
    <div className='container mt-24 mx-auto  px-4 py-12'>
      <HeroSection />
      <AboutSection />
      </div>
    </main>
  );
}