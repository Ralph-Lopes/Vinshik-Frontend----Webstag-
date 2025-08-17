export const TotalWorkChart = () => {
  return (
    <div className="w-[418px] h-[219px] bg-white rounded-[25px] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-black font-poppins text-[22px] font-semibold">Total work</h3>
        <div className="w-[80px] h-[26px] bg-[#E7E7E7] rounded-lg border border-[rgba(0,0,0,0.52)] flex items-center justify-center">
          <span className="text-black font-poppins text-[7px] font-medium tracking-wide">6 Month</span>
        </div>
      </div>
      
      {/* Chart SVG - simplified representation */}
      <div className="w-full h-[140px] relative">
        <svg className="w-full h-full" viewBox="0 0 418 140">
          {/* Chart background */}
          <rect x="0" y="0" width="418" height="140" fill="transparent" />
          
          {/* Chart line - simplified wave pattern */}
          <path
            d="M20 100 Q80 80 120 90 T200 85 T280 75 T360 80 L380 85"
            fill="none"
            stroke="#8FCDD9"
            strokeWidth="2"
          />
          
          {/* Fill area under the curve */}
          <path
            d="M20 100 Q80 80 120 90 T200 85 T280 75 T360 80 L380 85 L380 140 L20 140 Z"
            fill="url(#chartGradient)"
            opacity="0.3"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8FCDD9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8FCDD9" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Data points */}
          <circle cx="20" cy="100" r="3" fill="#8FCDD9" />
          <circle cx="120" cy="90" r="3" fill="#8FCDD9" />
          <circle cx="200" cy="85" r="3" fill="#8FCDD9" />
          <circle cx="280" cy="75" r="3" fill="#8FCDD9" />
          <circle cx="360" cy="80" r="3" fill="#8FCDD9" />
          <circle cx="380" cy="85" r="3" fill="#8FCDD9" />
        </svg>
        
        {/* Chart labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[#666] text-xs">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  );
};

export const TaskPercentageChart = () => {
  return (
    <div className="w-[298px] h-[219px] bg-white rounded-[25px] p-6 relative border-2 border-blue-400">
      <h3 className="text-black font-poppins text-[21px] font-semibold tracking-wide mb-4">Task Percentage</h3>
      
      {/* Circular Chart with Legend */}
      <div className="flex items-center">
        {/* Chart */}
        <div className="relative w-[140px] h-[140px]">
          <svg className="w-full h-full transform rotate-[-90deg]" viewBox="0 0 140 140">
            {/* Background circles */}
            <circle
              cx="70"
              cy="70"
              r="55"
              fill="none"
              stroke="#F0F0F0"
              strokeWidth="8"
            />
            <circle
              cx="70"
              cy="70"
              r="40"
              fill="none"
              stroke="#F0F0F0"
              strokeWidth="8"
            />
            <circle
              cx="70"
              cy="70"
              r="25"
              fill="none"
              stroke="#F0F0F0"
              strokeWidth="8"
            />
            
            {/* Progress arcs with gaps */}
            {/* Outer ring - Blue */}
            <circle
              cx="70"
              cy="70"
              r="55"
              fill="none"
              stroke="#8382FA"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="230 115"
              strokeDashoffset="0"
            />
            
            {/* Middle ring - Coral */}
            <circle
              cx="70"
              cy="70"
              r="40"
              fill="none"
              stroke="#FFBBB1"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="125 126"
              strokeDashoffset="0"
            />
            
            {/* Inner ring - Light Blue */}
            <circle
              cx="70"
              cy="70"
              r="25"
              fill="none"
              stroke="#ACDEE5"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="80 77"
              strokeDashoffset="0"
            />
          </svg>
        </div>
        
        {/* Legend */}
        <div className="ml-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#8382FA] rounded-full"></div>
            <span className="text-gray-600 font-poppins text-sm">Total Task 1234</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#FFBBB1] rounded-full"></div>
            <span className="text-gray-600 font-poppins text-sm">Running 04</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#ACDEE5] rounded-full"></div>
            <span className="text-gray-600 font-poppins text-sm">Pending 02</span>
          </div>
        </div>
      </div>
    </div>
  );
};
