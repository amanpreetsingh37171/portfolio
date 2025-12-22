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
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use proxy if VITE_API_URL is not set, otherwise use the full URL
    const apiUrl = import.meta.env.VITE_API_URL 
      ? `${import.meta.env.VITE_API_URL}/api/portfolio`
      : '/api/portfolio';
    
    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setPortfolio(data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        console.error('Error fetching portfolio:', err);
        setError(err.message);
        setLoading(false);
        // Try to load from server/src/data/portfolio.js as fallback
        // For now, we'll just show an error message
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error && !portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Unable to Load Portfolio</h2>
          <p className="text-slate-400 mb-6">
            The server is not responding. Please make sure the backend server is running on port 3001.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
          >
            Retry
          </button>
        </div>
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
