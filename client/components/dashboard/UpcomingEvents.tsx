export const UpcomingEvents = () => {
  const events = [
    { 
      time: "10 Am", 
      title: "Research", 
      people: "03 People",
      color: "#8382FA",
      left: "1007px"
    },
    { 
      time: "11 Am", 
      title: "Landing Page Design", 
      people: "03 People",
      color: "#FFBBB2",
      left: "1088px"
    },
    { 
      time: "12 Pm", 
      title: "Dashboard Design", 
      people: "03 People",
      color: "#ACDEE5",
      left: "1042px"
    },
    { 
      time: "1 Pm", 
      title: "Design Theory", 
      people: "03 People",
      color: "#A4EEC2",
      left: "1117px"
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-black font-poppins text-base font-semibold">Upcoming</h3>
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-[#B4B4B4] rounded-full"></div>
          <div className="w-1 h-3 bg-[#B4B4B4] rounded-full"></div>
          <div className="w-1 h-3 bg-[#B4B4B4] rounded-full"></div>
        </div>
      </div>
      
      <div className="text-[rgba(0,0,0,0.58)] font-nunito-sans text-[10px] font-semibold mb-4">
        August 2025
      </div>
      
      {/* Time Headers */}
      <div className="flex gap-8 mb-6">
        <span className="text-black font-nunito-sans text-[13px] font-semibold">10 Am</span>
        <span className="text-black font-nunito-sans text-[13px] font-semibold">11 Am</span>
        <span className="text-black font-nunito-sans text-[13px] font-semibold">12 Pm</span>
        <span className="text-black font-nunito-sans text-[13px] font-semibold">1 Pm</span>
      </div>
      
      {/* Event Cards */}
      <div className="relative h-[400px]">
        {events.map((event, index) => (
          <div 
            key={index}
            className="absolute w-[115px] h-[43px] bg-white rounded-r-[11px] shadow-sm"
            style={{ top: `${80 + index * 120}px`, left: `${index * 80}px` }}
          >
            <div 
              className="w-[5px] h-full rounded-r-sm"
              style={{ backgroundColor: event.color }}
            />
            <div className="p-2">
              <div className="text-black font-nunito-sans text-[10px] font-bold tracking-wide">
                {event.title}
              </div>
              <div className="text-[rgba(0,0,0,0.53)] font-nunito-sans text-[9px] font-normal tracking-wide">
                {event.people}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
