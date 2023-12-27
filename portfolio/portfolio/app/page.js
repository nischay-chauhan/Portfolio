import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import BlobCursor from './components/BlobCursor';

export default function Home() {
  return (
    <main>
    <Navbar />
    <div className='container mt-24 mx-auto  px-4 py-12'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
      <BlobCursor />
      </div>
    <Footer />
    
    </main>
  );
}