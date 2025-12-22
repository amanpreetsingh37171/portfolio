import React, { useState, useEffect } from 'react';

const AboutEditor = ({ data, onSave }) => {
  const [formData, setFormData] = useState({
    bio: '',
    highlights: ['', '', '', ''],
  });

  useEffect(() => {
    if (data) {
      setFormData({
        bio: data.bio || '',
        highlights: data.highlights || ['', '', '', ''],
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({
      ...formData,
      highlights: newHighlights,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Edit About Section</h2>
      
      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="input-field"
            rows="6"
            placeholder="Write a detailed bio about yourself"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Highlights
          </label>
          {formData.highlights.map((highlight, index) => (
            <input
              key={index}
              type="text"
              value={highlight}
              onChange={(e) => handleHighlightChange(index, e.target.value)}
              className="input-field mb-2"
              placeholder={`Highlight ${index + 1}`}
            />
          ))}
        </div>

        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AboutEditor;

