import React from 'react';

const Analytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Analytics Dashboard</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Performance Overview</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart Placeholder
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Task Completion Rate</h2>
            <div className="text-3xl font-bold text-primary">87%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Active Projects</h2>
            <div className="text-3xl font-bold text-primary">15</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;