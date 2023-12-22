import React from 'react';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen px-4 py-12 flex-col bg-gray-900">
      <HeroSection />
    </main>
  );
}