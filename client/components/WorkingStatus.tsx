import React from 'react';

const WorkingStatus: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Working Status</h2>
      <div className="relative flex items-center justify-center">
        <div className="relative w-[180px] h-[180px]">
          <svg className="w-full h-full transform -rotate-90">
            <circle 
              className="text-gray-100"
              strokeWidth="15"
              stroke="currentColor"
              fill="transparent"
              r="80"
              cx="90"
              cy="90"
            />
            <circle 
              className="text-purple-500"
              strokeWidth="15"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="80"
              cx="90"
              cy="90"
              strokeDasharray="502"
              strokeDashoffset="150"  // Adjust this value to show 70%
            />
          </svg>
          
          {/* Percentage Display */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-3xl font-bold text-gray-800">70%</span>
            <p className="text-sm text-gray-600 mt-1">Member Working</p>
          </div>
        </div>

        {/* Month Indicator */}
        <div className="absolute bottom-0 right-0">
          <div className="text-red-500 text-sm font-medium">Jan</div>
          <div className="w-6 h-1 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStatus;