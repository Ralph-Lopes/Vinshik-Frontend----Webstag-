export const WorkProgress = () => {
  const projects = [
    {
      title: "Dashboard Design",
      progress: 90,
      startDate: "10 Jan",
      endDate: "29 Jan",
      progressColor: "#9D9DF7"
    },
    {
      title: "App UI UX Design",
      progress: 30,
      startDate: "12 Jan",
      endDate: "25 Jan",
      progressColor: "#FFCCC5"
    },
    {
      title: "Website Development",
      progress: 65,
      startDate: "05 Jan",
      endDate: "15 Feb",
      progressColor: "#A8E6CF"
    },
    {
      title: "Mobile App Testing",
      progress: 45,
      startDate: "20 Jan",
      endDate: "10 Feb",
      progressColor: "#FFD3A5"
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-black font-poppins text-[22px] font-semibold">Work Progress</h3>
        <button className="text-black font-poppins text-[7px] font-medium tracking-wide">See All</button>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-[217px] h-[167px] bg-white rounded-[25px] p-6 ${
              index === 1 || index === 3 ? 'ml-[-150px]' : ''
            }`}
          >
            <div className="mb-4">
              <div className="text-[#747474] font-poppins text-[8px] font-normal mb-1">Ongoing Project</div>
              <div className="text-black font-poppins text-[14px] font-bold">{project.title}</div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full h-[6px] bg-[#EAEAEA] rounded-full mb-2">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${project.progress}%`, 
                    backgroundColor: project.progressColor 
                  }}
                />
              </div>
              <div className="text-[#747474] font-poppins text-[8px] font-normal">
                {project.progress} % Complete
              </div>
            </div>
            
            {/* Dates */}
            <div className="border-t border-[#D9D9D9] pt-3">
              <div className="flex justify-between text-[8px]">
                <span className="text-[#747474] font-poppins">
                  <span className="font-bold text-[#4A4A4A]">Start Date :</span> {project.startDate}
                </span>
                <span className="text-[#747474] font-poppins">
                  <span className="font-bold text-[#4A4A4A]">End Date :</span> {project.endDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
