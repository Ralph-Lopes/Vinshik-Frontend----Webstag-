import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, selectedDate: externalSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(externalSelectedDate || null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const previousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect?.(date); // Pass the selected date to the parent component
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 w-[320px]">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-medium">{format(currentDate, 'MMMM')}</h2>
          <p className="text-2xl font-bold">{format(currentDate, 'yyyy')}</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={previousMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div 
            key={day} 
            className="text-center text-sm text-gray-400 py-2"
          >
            {day}
          </div>
        ))}

        {daysInMonth.map((date) => (
          <button
            key={date.toString()}
            onClick={() => handleDateClick(date)}
            className={`aspect-square rounded-full text-sm hover:bg-gray-100 transition-colors ${
              isSameDay(date, selectedDate) ? 'bg-purple-500 text-white' : ''
            } ${!isSameMonth(date, currentDate) ? 'text-gray-300' : 'text-gray-900'}`}
          >
            {format(date, 'd')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;