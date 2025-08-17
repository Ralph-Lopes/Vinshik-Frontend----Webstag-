import React from 'react';

const Help = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Help Center</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              'How do I create a new project?',
              'How to add team members?',
              'Where can I view my analytics?',
              'How to change notification settings?'
            ].map((question, index) => (
              <div 
                key={index}
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Need Support?</h2>
          <p className="text-gray-500 mb-4">
            Our support team is available 24/7 to help you with any questions.
          </p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;