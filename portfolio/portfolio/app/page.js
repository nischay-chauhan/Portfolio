import React from 'react';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
    <div className='container mx-auto  px-4 py-12'>
      <HeroSection />
      </div>
    </main>
  );
}