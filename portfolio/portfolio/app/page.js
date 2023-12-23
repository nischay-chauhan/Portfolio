import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
    <Navbar />
    <div className='container mt-24 mx-auto  px-4 py-12'>
      <HeroSection />
      </div>
    </main>
  );
}