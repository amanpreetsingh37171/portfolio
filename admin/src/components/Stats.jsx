import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Stats = ({ portfolio }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/stats`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (!stats) {
    return <div className="text-center text-slate-400">Loading statistics...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Portfolio Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="text-slate-400 text-sm mb-2">Total Projects</div>
          <div className="text-3xl font-bold text-primary-400">{stats.projectsCount}</div>
        </div>
        
        <div className="card">
          <div className="text-slate-400 text-sm mb-2">Total Skills</div>
          <div className="text-3xl font-bold text-primary-400">{stats.skillsCount}</div>
        </div>
        
        <div className="card">
          <div className="text-slate-400 text-sm mb-2">Contact Messages</div>
          <div className="text-3xl font-bold text-primary-400">{stats.contactsCount}</div>
        </div>
        
        <div className="card">
          <div className="text-slate-400 text-sm mb-2">Error Logs (24h)</div>
          <div className="text-3xl font-bold text-red-400">{stats.errorsCount}</div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-white mb-4">Portfolio Status</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Hero Section</span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              portfolio?.hero ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {portfolio?.hero ? 'Complete' : 'Incomplete'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">About Section</span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              portfolio?.about ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {portfolio?.about ? 'Complete' : 'Incomplete'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Skills Section</span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              portfolio?.skills?.length > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {portfolio?.skills?.length > 0 ? 'Complete' : 'Incomplete'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Projects Section</span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              portfolio?.projects?.length > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {portfolio?.projects?.length > 0 ? 'Complete' : 'Incomplete'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

