import React from 'react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium">Profile Settings</h2>
          <p className="text-sm text-gray-500">Manage your account preferences</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input 
              type="text" 
              className="mt-1 w-full rounded-lg border p-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input 
              type="email" 
              className="mt-1 w-full rounded-lg border p-2"
              placeholder="your@email.com"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;