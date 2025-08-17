import React from 'react';

const Team = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Team Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Active Members</h2>
          <div className="text-3xl font-bold text-primary">24</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Departments</h2>
          <div className="text-3xl font-bold text-primary">5</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Projects</h2>
          <div className="text-3xl font-bold text-primary">12</div>
        </div>
      </div>
    </div>
  );
};

export default Team;