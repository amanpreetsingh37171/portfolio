import React from 'react';

function About({ data }) {
  if (!data) return null;

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-2xl p-8">
            <div className="w-full aspect-square bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-6">
              Who I Am
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {data.bio}
            </p>

            <div className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
