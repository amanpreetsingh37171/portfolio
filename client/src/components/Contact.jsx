import React, { useState } from 'react';

function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/contact`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-6">
              Let's Connect
            </h3>
            <p className="text-slate-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {data?.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>{data.email}</span>
                </a>
              )}

              {data?.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <svg className="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <span>GitHub</span>
                </a>
              )}

              {data?.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <svg className="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 text-slate-200 placeholder-slate-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 text-slate-200 placeholder-slate-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 text-slate-200 placeholder-slate-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
