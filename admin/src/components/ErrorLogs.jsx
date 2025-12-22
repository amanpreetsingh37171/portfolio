import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const ErrorLogs = ({ getAuthHeaders }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, [filter]);

  const fetchLogs = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/admin/errors?filter=${filter}`,
        getAuthHeaders()
      );
      setLogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching logs:', error);
      setLoading(false);
    }
  };

  const clearLogs = async () => {
    try {
      await axios.delete(`${API_URL}/api/admin/errors`, getAuthHeaders());
      setLogs([]);
    } catch (error) {
      console.error('Error clearing logs:', error);
    }
  };

  const getErrorColor = (level) => {
    switch (level) {
      case 'error':
        return 'text-red-400';
      case 'warning':
        return 'text-yellow-400';
      case 'info':
        return 'text-blue-400';
      default:
        return 'text-slate-400';
    }
  };

  if (loading) {
    return <div className="text-center text-slate-400">Loading error logs...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Error Logs</h2>
        <div className="flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="input-field w-auto"
          >
            <option value="all">All</option>
            <option value="error">Errors</option>
            <option value="warning">Warnings</option>
            <option value="info">Info</option>
          </select>
          <button onClick={clearLogs} className="btn-secondary">
            Clear Logs
          </button>
        </div>
      </div>

      <div className="card">
        {logs.length === 0 ? (
          <div className="text-center text-slate-400 py-8">
            No error logs found
          </div>
        ) : (
          <div className="space-y-4">
            {logs.map((log, index) => (
              <div
                key={index}
                className="border-b border-slate-700 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`font-semibold ${getErrorColor(log.level)}`}>
                    {log.level.toUpperCase()}
                  </span>
                  <span className="text-sm text-slate-400">
                    {new Date(log.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-slate-300 mb-1">{log.message}</p>
                {log.stack && (
                  <pre className="text-xs text-slate-500 bg-slate-900 p-2 rounded mt-2 overflow-x-auto">
                    {log.stack}
                  </pre>
                )}
                {log.url && (
                  <p className="text-xs text-slate-500 mt-1">URL: {log.url}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorLogs;

