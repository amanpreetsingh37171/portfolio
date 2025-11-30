import React from 'react';

function Skills({ data }) {
  if (!data || data.length === 0) return null;

  const categories = [...new Set(data.map(skill => skill.category))];

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Database': 'from-purple-500 to-pink-500',
      'Language': 'from-orange-500 to-yellow-500',
      'Tools': 'from-red-500 to-rose-500'
    };
    return colors[category] || 'from-primary-500 to-purple-500';
  };

  return (
    <section id="skills" className="py-20">
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
            <div key={category}>
              <h3 className="text-xl font-semibold text-slate-300 mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="glass-card rounded-xl p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-primary-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getCategoryColor(category)} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
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
