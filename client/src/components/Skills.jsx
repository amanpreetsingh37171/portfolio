import React, { useState, useEffect } from 'react';

function Skills({ data }) {
  if (!data || data.length === 0) return null;

  const categories = [...new Set(data.map(skill => skill.category))];
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedSkills(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getCategoryIcon = (category) => {
    const icons = {
      'Language': '⚙️',
      'Frontend': '🎨',
      'Backend': '⚡',
      'Database': '📊',
      'Data Science': '🤖',
      'ML Frameworks': '🧠',
      'Tools': '🛠️'
    };
    return icons[category] || '✨';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Database': 'from-purple-500 to-pink-500',
      'Language': 'from-orange-500 to-yellow-500',
      'Tools': 'from-red-500 to-rose-500',
      'Data Science': 'from-violet-500 to-purple-500',
      'ML Frameworks': 'from-indigo-500 to-blue-500'
    };
    return colors[category] || 'from-primary-500 to-purple-500';
  };

  const getProgressColor = (level) => {
    if (level >= 90) return 'bg-gradient-to-r from-green-400 to-emerald-500';
    if (level >= 80) return 'bg-gradient-to-r from-blue-400 to-cyan-500';
    if (level >= 70) return 'bg-gradient-to-r from-purple-400 to-pink-500';
    return 'bg-gradient-to-r from-yellow-400 to-orange-500';
  };

  const getLevelLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="animate-fade-in">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{getCategoryIcon(category)}</span>
                <h3 className="text-2xl font-bold text-slate-200">{category}</h3>
                <div className={`h-1 flex-1 bg-gradient-to-r ${getCategoryColor(category)} rounded-full`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={index} 
                      className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-slate-200 font-bold text-lg group-hover:text-primary-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">{getLevelLabel(skill.level)}</p>
                        </div>
                        <span className="text-sm font-bold text-primary-400 bg-primary-500/20 px-3 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getProgressColor(skill.level)} rounded-full transition-all duration-1000 ${
                              animatedSkills ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ 
                              width: animatedSkills ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 50}ms`
                            }}
                          ></div>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                  i < Math.ceil(skill.level / 20)
                                    ? `bg-gradient-to-r ${getCategoryColor(category)}`
                                    : 'bg-slate-700'
                                }`}
                              ></div>
                            ))}
                          </div>
                          <span className="text-xs text-slate-400">
                            {skill.level >= 90 ? '⭐⭐⭐' : skill.level >= 80 ? '⭐⭐' : skill.level >= 70 ? '⭐' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
