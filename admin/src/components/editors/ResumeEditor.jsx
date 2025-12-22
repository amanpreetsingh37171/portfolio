import React, { useState, useEffect } from 'react';

const ResumeEditor = ({ data, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    resumeUrl: '',
    summary: '',
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || '',
        resumeUrl: data.resumeUrl || '',
        summary: data.summary || '',
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Edit Resume Information</h2>
      
      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Resume URL
          </label>
          <input
            type="text"
            name="resumeUrl"
            value={formData.resumeUrl}
            onChange={handleChange}
            className="input-field"
            placeholder="/assets/resume.pdf"
            required
          />
          <p className="text-sm text-slate-400 mt-1">
            Path to resume file in public folder
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="input-field"
            rows="4"
            placeholder="Professional summary"
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ResumeEditor;

