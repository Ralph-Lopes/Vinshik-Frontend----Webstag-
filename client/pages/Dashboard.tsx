import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import { format } from 'date-fns';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">
            {selectedDate ? format(selectedDate, 'dd MMMM yyyy') : 'No date selected'}
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Welcome To</h2>
            <p className="text-gray-500">Your Task Management Area</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-end">
          <Calendar 
            selectedDate={selectedDate} 
            onDateSelect={handleDateSelect} 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;