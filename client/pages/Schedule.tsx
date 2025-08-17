import React, { useState } from 'react';
import Calendar from '../components/Calendar';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // Handle date selection logic here
  };

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto">
        <Calendar 
          selectedDate={selectedDate} 
          onDateSelect={handleDateSelect} 
        />
      </div>
    </div>
  );
};

export default Schedule;