import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import HeroEditor from './editors/HeroEditor';
import AboutEditor from './editors/AboutEditor';
import SkillsEditor from './editors/SkillsEditor';
import ProjectsEditor from './editors/ProjectsEditor';
import ContactEditor from './editors/ContactEditor';
import ResumeEditor from './editors/ResumeEditor';
import ErrorLogs from './ErrorLogs';
import Stats from './Stats';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Dashboard = () => {
  const { logout, getAuthHeaders } = useAuth();
  const [activeTab, setActiveTab] = useState('stats');
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/portfolio`);
      setPortfolio(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      setLoading(false);
    }
  };

  const handleSave = async (section, data) => {
    try {
      setSaveStatus('Saving...');
      const response = await axios.put(
        `${API_URL}/api/admin/portfolio/${section}`,
        data,
        getAuthHeaders()
      );
      
      if (response.data.success) {
        setSaveStatus('Saved successfully!');
        setPortfolio(response.data.portfolio);
        setTimeout(() => setSaveStatus(''), 3000);
      }
    } catch (error) {
      setSaveStatus('Error saving changes');
      console.error('Error saving:', error);
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const tabs = [
    { id: 'stats', label: 'Statistics', icon: '📊' },
    { id: 'hero', label: 'Hero Section', icon: '🎯' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'errors', label: 'Error Logs', icon: '⚠️' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-white">Portfolio Admin Panel</h1>
            <div className="flex items-center gap-4">
              {saveStatus && (
                <span className={`text-sm ${
                  saveStatus.includes('Error') ? 'text-red-400' : 'text-green-400'
                }`}>
                  {saveStatus}
                </span>
              )}
              <button
                onClick={logout}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 border-r border-slate-700 min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'stats' && <Stats portfolio={portfolio} />}
          {activeTab === 'hero' && (
            <HeroEditor data={portfolio?.hero} onSave={(data) => handleSave('hero', data)} />
          )}
          {activeTab === 'about' && (
            <AboutEditor data={portfolio?.about} onSave={(data) => handleSave('about', data)} />
          )}
          {activeTab === 'skills' && (
            <SkillsEditor data={portfolio?.skills} onSave={(data) => handleSave('skills', data)} />
          )}
          {activeTab === 'projects' && (
            <ProjectsEditor data={portfolio?.projects} onSave={(data) => handleSave('projects', data)} />
          )}
          {activeTab === 'contact' && (
            <ContactEditor data={portfolio?.contact} onSave={(data) => handleSave('contact', data)} />
          )}
          {activeTab === 'resume' && (
            <ResumeEditor data={portfolio?.resume} onSave={(data) => handleSave('resume', data)} />
          )}
          {activeTab === 'errors' && <ErrorLogs getAuthHeaders={getAuthHeaders} />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

