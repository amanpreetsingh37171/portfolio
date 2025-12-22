import React, { useState, useEffect } from 'react';

const ProjectsEditor = ({ data, onSave }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (data) {
      setProjects(data.map(proj => ({ ...proj })));
    }
  }, [data]);

  const handleAdd = () => {
    setProjects([...projects, {
      id: Date.now(),
      title: '',
      description: '',
      technologies: [],
      image: '',
      github: '',
      live: '',
    }]);
  };

  const handleRemove = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const handleTechChange = (index, techString) => {
    const technologies = techString.split(',').map(t => t.trim()).filter(t => t);
    handleChange(index, 'technologies', technologies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(projects);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Edit Projects</h2>
        <button
          type="button"
          onClick={handleAdd}
          className="btn-primary"
        >
          Add Project
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {projects.map((project, index) => (
          <div key={project.id || index} className="card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-white">Project {index + 1}</h3>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleChange(index, 'title', e.target.value)}
                  className="input-field"
                  placeholder="Project title"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  className="input-field"
                  rows="3"
                  placeholder="Project description"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Technologies (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={project.technologies?.join(', ') || ''}
                    onChange={(e) => handleTechChange(index, e.target.value)}
                    className="input-field"
                    placeholder="React, Node.js, MongoDB"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={project.image}
                    onChange={(e) => handleChange(index, 'image', e.target.value)}
                    className="input-field"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={project.github}
                    onChange={(e) => handleChange(index, 'github', e.target.value)}
                    className="input-field"
                    placeholder="https://github.com/username/repo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Live URL
                  </label>
                  <input
                    type="url"
                    value={project.live}
                    onChange={(e) => handleChange(index, 'live', e.target.value)}
                    className="input-field"
                    placeholder="https://example.com"
                  />
                </div>
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

export default ProjectsEditor;

