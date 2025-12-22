import React from 'react';

function Hero({ data, resume }) {
  if (!data) return null;

  const handleDownloadResume = () => {
    if (resume?.resumeUrl) {
      const link = document.createElement('a');
      link.href = resume.resumeUrl;
      link.download = `${resume.name || data.name || 'Resume'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <p className="text-primary-400 font-medium mb-4 text-lg">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">{data.name}</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-slate-300 font-light mb-6">
          {data.title}
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {data.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            View My Work
          </a>
          {resume?.resumeUrl && (
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </button>
          )}
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-600 hover:border-primary-500 text-slate-300 hover:text-primary-400 rounded-full font-medium transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
