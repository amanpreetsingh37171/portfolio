import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumeCV from './components/ResumeCV';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/portfolio`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setPortfolio(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching portfolio:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero data={portfolio?.hero} resume={portfolio?.resume} />
        <About data={portfolio?.about} />
        <Skills data={portfolio?.skills} />
        <Projects data={portfolio?.projects} />
        <ResumeCV data={portfolio?.resume} />
        <Contact data={portfolio?.contact} />
      </main>
      <Footer data={portfolio?.contact} />
    </div>
  );
}

export default App;
