import React, { useState } from 'react';

function ResumeCV({ data }) {
  const [activeTab, setActiveTab] = useState('view');

  if (!data) return null;

  const handleDownload = () => {
    const downloadUrl = data.resumeUrl;
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${data.name || 'Resume'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-200 mb-6">View Resume</h3>
            { data.resumeUrl ? (
              <div className="space-y-4">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                  <p className="text-slate-400 text-sm mb-4">
                    Preview your resume below or download it for offline viewing.
                  </p>
                  <iframe
                    src={data.resumeUrl}
                    className="w-full h-96 rounded-lg bg-slate-800 border border-slate-600"
                    title="Resume Preview"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={data.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3v4a1 1 0 001 1h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3L12 12" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18" />
                    </svg>
                    Open Resume (new tab)
                  </a>

                  <a
                    href={data.resumeUrl}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-slate-700/30 rounded-lg p-8 text-center border border-slate-600">
                <svg className="w-12 h-12 text-slate-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-slate-400">Resume not available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeCV;
