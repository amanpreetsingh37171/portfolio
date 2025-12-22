import React, { useState, useEffect } from 'react';

const ContactEditor = ({ data, onSave }) => {
  const [formData, setFormData] = useState({
    email: '',
    linkedin: '',
    github: '',
    twitter: '',
  });

  useEffect(() => {
    if (data) {
      setFormData({
        email: data.email || '',
        linkedin: data.linkedin || '',
        github: data.github || '',
        twitter: data.twitter || '',
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
      <h2 className="text-3xl font-bold text-white mb-6">Edit Contact Information</h2>
      
      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            LinkedIn URL
          </label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="input-field"
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="input-field"
            placeholder="https://github.com/username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Twitter URL
          </label>
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="input-field"
            placeholder="https://twitter.com/username"
          />
        </div>

        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ContactEditor;

