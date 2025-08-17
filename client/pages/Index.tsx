import Sidebar from "@/components/dashboard/Sidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { Calendar, DateHeader } from "@/components/dashboard/Calendar";
import { TotalWorkChart, TaskPercentageChart } from "@/components/dashboard/Chart";
import { WorkProgress } from "@/components/dashboard/WorkProgress";
import { WorkingStatus } from "@/components/dashboard/WorkingStatus";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import React, { useState } from "react";

import SearchBar from "@/components/dashboard/SearchBar";

const Index = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    try {
      // Replace this with your actual API endpoint
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Search failed:", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="min-h-screen bg-[rgba(194,194,194,0.25)] font-poppins p-4">
      <div className="w-full max-w-[1400px] h-[calc(105vh-2rem)] mx-auto relative border border-[#3105AC] rounded-[25px] overflow-hidden flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-3 lg:p-6 overflow-auto hide-scrollbar">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search tasks, members..."
              />
            </div>
            <div className="text-[#000] font-droid-sans text-xs">
              17 August 2025 
            </div>

            {/* Date Selector */}
            <div className="mt-4">
              <div className="text-black font-poppins text-xl font-semibold">
                17 August 2025
              </div>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="flex gap-6 flex-col lg:flex-row">
            {/* Left Column - Main Content */}
            <div className="flex-1 max-w-full lg:max-w-[750px]">
              {/* Hero Section */}
              <div className="w-full h-[188px] bg-white rounded-[18px] mb-6 p-6 relative overflow-hidden">
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="text-[#7E7E7E] font-poppins text-xl font-normal mb-2">
                      Welcome To
                    </div>
                    <div className="text-black font-poppins text-2xl font-semibold mb-4">
                      Your Task Management Area
                    </div>
                    <div className="text-[#5E5E5E] font-poppins text-sm font-light max-w-[445px] mb-6">
                      Lorem ipsum dolor sit amet consectetur. Bibendum risus urna
                      tortor praesent.
                    </div>
                    <button className="w-[97px] h-[35px] bg-progress-purple rounded-[18px] text-white font-poppins text-[11px] font-medium">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute right-0 top-0 w-[260px] h-[190px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/23a25621e6996ff186ab34d63fecf0c27ff9d6a9?width=521"
                      alt="Dashboard illustration"
                      className="w-full h-full object-cover rounded-r-[18px]"
                    />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="mb-6">
                <StatsCards />
              </div>

              {/* Charts Row */}
              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <TotalWorkChart />
                <TaskPercentageChart />
              </div>

              {/* Work Progress */}
              <WorkProgress />
            </div>

            {/* Right Column - Calendar and Events */}
            <div className="w-[320px] space-y-6">
              <Calendar />
              <TeamMembers />
              <div className="mt-8">
                <WorkingStatus />
              </div>
            </div>
          </div>

          {/* Search Results Section */}
          {searchResults.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Search Results</h2>
              <div className="space-y-2">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="p-4 bg-white rounded-lg shadow-sm"
                  >
                    {/* Customize based on your data structure */}
                    <p>{result.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
