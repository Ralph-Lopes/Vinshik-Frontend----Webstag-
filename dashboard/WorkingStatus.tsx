export const WorkingStatus = () => {
  return (
    <div
      className="w-[271px] h-[240px] bg-white rounded-[25px] p-6 relative"
      style={{ marginTop: -225, marginLeft: -287 }}
    >
      <h3 className="text-black font-poppins text-[21px] font-semibold mb-4">Working Status</h3>
      
      {/* Circular Progress Chart */}
      <div className="relative w-[212px] h-[184px] mx-auto" style={{ marginTop: -18 }}>
        <svg className="w-full h-full transform rotate-[-90deg]" viewBox="0 0 160 160">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r="65"
            fill="none"
            stroke="#F0F0F0"
            strokeWidth="16"
          />
          
          {/* Progress arc - 70% */}
          <circle
            cx="80"
            cy="80"
            r="65"
            fill="none"
            stroke="url(#workingGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="286.3 122.7"
            strokeDashoffset="0"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="workingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8382FA" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center percentage text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-black font-poppins text-2xl font-semibold">70%</div>
          <div className="text-gray-600 font-poppins text-sm mt-1">Member Working</div>
        </div>
        
        {/* Small text on the arc */}
        <div className="absolute bottom-8 right-4 transform rotate-12">
          {/* <span className="text-white font-poppins text-xs font-semibold bg-[#8382FA] px-2 py-1 rounded">70%</span> */}
        </div>
      </div>
    </div>
  );
};
