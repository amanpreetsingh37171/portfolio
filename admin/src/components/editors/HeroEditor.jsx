import React, { useState, useEffect } from 'react';

const HeroEditor = ({ data, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    tagline: '',
    description: '',
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || '',
        title: data.title || '',
        tagline: data.tagline || '',
        description: data.description || '',
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
      <h2 className="text-3xl font-bold text-white mb-6">Edit Hero Section</h2>
      
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
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input-field"
            placeholder="Your professional title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Tagline
          </label>
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            className="input-field"
            placeholder="Short catchy tagline"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input-field"
            rows="4"
            placeholder="Brief description about yourself"
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

export default HeroEditor;

