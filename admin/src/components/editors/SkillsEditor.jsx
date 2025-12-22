import React, { useState, useEffect } from 'react';

const SkillsEditor = ({ data, onSave }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (data) {
      setSkills([...data]);
    }
  }, [data]);

  const handleAdd = () => {
    setSkills([...skills, { name: '', category: '', level: 50 }]);
  };

  const handleRemove = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = field === 'level' ? parseInt(value) || 0 : value;
    setSkills(newSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(skills);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Edit Skills</h2>
        <button
          type="button"
          onClick={handleAdd}
          className="btn-primary"
        >
          Add Skill
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-white">Skill {index + 1}</h3>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  className="input-field"
                  placeholder="e.g., React"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={skill.category}
                  onChange={(e) => handleChange(index, 'category', e.target.value)}
                  className="input-field"
                  placeholder="e.g., Frontend"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Level ({skill.level}%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={skill.level}
                  onChange={(e) => handleChange(index, 'level', e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SkillsEditor;

