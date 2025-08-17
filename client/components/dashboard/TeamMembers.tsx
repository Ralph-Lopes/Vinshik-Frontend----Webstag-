export const TeamMembers = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "UI/UX Designer",
      status: "online",
      avatar: "JS",
      statusColor: "#22C55E",
      bgColor: "#8382FA"
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      status: "busy",
      avatar: "SJ",
      statusColor: "#EF4444",
      bgColor: "#FFBBB1"
    },
    {
      name: "Mike Chen",
      role: "Backend Developer",
      status: "away",
      avatar: "MC",
      statusColor: "#F59E0B",
      bgColor: "#ACDEE5"
    },
    {
      name: "Lisa Davis",
      role: "Project Manager",
      status: "online",
      avatar: "LD",
      statusColor: "#22C55E",
      bgColor: "#A4EEC2"
    }
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Available';
      case 'busy': return 'In Meeting';
      case 'away': return 'Away';
      default: return 'Offline';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-black font-poppins text-base font-semibold">Team Members</h3>
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-[#B4B4B4] rounded-full"></div>
          <div className="w-1 h-3 bg-[#B4B4B4] rounded-full"></div>
          <div className="w-1 h-3 bg-[#B4B4B4] rounded-full"></div>
        </div>
      </div>
      
      <div className="text-[rgba(0,0,0,0.58)] font-nunito-sans text-[10px] font-semibold mb-4">
        4 Active Members
      </div>
      
      {/* Team Member Cards */}
      <div className="space-y-3">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm relative"
                style={{ backgroundColor: member.bgColor }}
              >
                {member.avatar}
                {/* Status indicator */}
                <div 
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
                  style={{ backgroundColor: member.statusColor }}
                ></div>
              </div>
              
              {/* Member info */}
              <div className="flex-1">
                <div className="text-black font-poppins text-sm font-semibold">
                  {member.name}
                </div>
                <div className="text-gray-500 font-poppins text-xs">
                  {member.role}
                </div>
                <div 
                  className="text-xs font-medium mt-1"
                  style={{ color: member.statusColor }}
                >
                  {getStatusText(member.status)}
                </div>
              </div>
              
              {/* Action button */}
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add new member button */}
      <div className="mt-4">
        <button className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-3 text-gray-500 hover:text-gray-700 transition-colors">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium">Invite Team Member</span>
          </div>
        </button>
      </div>
    </div>
  );
};
