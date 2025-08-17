import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

export const Calendar = () => {
  const days = [
    { day: '27', dim: true }, { day: '28', dim: true }, { day: '1' }, { day: '2' }, { day: '3' }, { day: '4' },
    { day: '5' }, { day: '6' }, { day: '7' }, { day: '8' }, { day: '9' }, { day: '10' },
    { day: '11' }, { day: '12' }, { day: '13' }, { day: '14' }, { day: '15' }, { day: '16' },
    { day: '17',active:true }, { day: '18' }, { day: '19' }, { day: '20' }, { day: '21' }, { day: '22' },
    { day: '23' }, { day: '24' }, { day: '25' }, { day: '26' }, { day: '27' }, { day: '28' },
    { day: '29' }, { day: '30' }, { day: '31' }, { day: '1', dim: true }, { day: '2', dim: true }, { day: '3', dim: true }
  ];

  return (
    <div className="w-[292px] bg-white rounded-2xl shadow-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-black font-poppins text-xs font-medium tracking-wide">August</div>
          <div className="text-black font-poppins text-xl font-medium tracking-wide">2025</div>
        </div>
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-3 h-3 text-black cursor-pointer" />
          <ChevronRight className="w-3 h-3 text-black cursor-pointer" />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-6 gap-[6px]">
        {days.map((date, index) => (
          <div
            key={index}
            className={`w-[22px] h-[22px] rounded-lg flex items-center justify-center ${
              date.active 
                ? 'bg-[#6164CE] text-white' 
                : 'bg-[rgba(250,250,250,0.5)]'
            }`}
          >
            <span 
              className={`font-poppins text-xs font-medium tracking-wide ${
                date.dim ? 'opacity-20' : date.active ? 'text-white' : 'text-black'
              }`}
            >
              {date.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DateHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Search Bar */}
      <div className="w-[199px] h-[35px] bg-white rounded-lg flex items-center px-4">
        <svg className="w-5 h-5 text-[#A59E9E] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-[#959595] font-poppins text-[11px] font-normal">Search</span>
      </div>

      {/* Date Selector */}
      <div className="w-[141px] h-[31px] bg-[#E7E7E7] rounded-lg border border-[rgba(40,47,219,0.5)] flex items-center px-3">
        <CalendarIcon className="w-5 h-5 text-black mr-2" />
        <span className="text-black font-droid-sans text-sm font-normal">August 2025</span>
      </div>

      {/* Month Year */}
      <div className="text-black font-poppins text-xl font-semibold">August 2025</div>
    </div>
  );
};
