import React from 'react';

const TaskPercentage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Task Percentage</h2>
      <div className="relative flex items-center justify-center">
        <div className="relative w-[200px] h-[200px]">
          <svg className="w-full h-full transform -rotate-90">
            {/* Base circles */}
            <circle 
              className="text-gray-100"
              strokeWidth="15"
              stroke="currentColor"
              fill="transparent"
              r="85"
              cx="100"
              cy="100"
            />
            
            {/* Total Tasks - Purple */}
            <circle 
              className="text-purple-500"
              strokeWidth="15"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="85"
              cx="100"
              cy="100"
              strokeDasharray="534"
              strokeDashoffset="150"
            />
            
            {/* Running - Pink */}
            <circle 
              className="text-pink-400"
              strokeWidth="15"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="65"
              cx="100"
              cy="100"
              strokeDasharray="408"
              strokeDashoffset="300"
            />
            
            {/* Pending - Cyan */}
            <circle 
              className="text-cyan-400"
              strokeWidth="15"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="100"
              cy="100"
              strokeDasharray="283"
              strokeDashoffset="200"
            />
          </svg>
        </div>

        {/* Legend */}
        <div className="ml-8 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-gray-700">Total Task 1234</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <span className="text-sm text-gray-700">Running 04</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className="text-sm text-gray-700">Pending 02</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPercentage;