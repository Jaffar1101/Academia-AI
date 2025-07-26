import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";

const CalendarWidget = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = [
    [27, 28, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2]
  ];

  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">My Calendar</h3>
        <Share2 className="w-5 h-5 text-muted-foreground cursor-pointer" />
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <ChevronLeft className="w-5 h-5 text-muted-foreground cursor-pointer" />
        <span className="font-medium text-primary">March 2022</span>
        <ChevronRight className="w-5 h-5 text-muted-foreground cursor-pointer" />
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day, index) => (
          <div key={index} className="text-center text-xs text-muted-foreground py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {dates.map((week, weekIndex) => 
          week.map((date, dateIndex) => {
            const isToday = weekIndex === 2 && dateIndex === 3; // 16th
            const hasEvent = (weekIndex === 1 && dateIndex === 4) || (weekIndex === 2 && dateIndex === 1); // 11th and 14th
            
            return (
              <div 
                key={`${weekIndex}-${dateIndex}`}
                className={`
                  text-center text-sm py-2 cursor-pointer rounded-lg
                  ${isToday ? 'bg-primary text-primary-foreground' : ''}
                  ${hasEvent && !isToday ? 'bg-accent text-foreground' : ''}
                  ${!isToday && !hasEvent ? 'text-muted-foreground hover:bg-accent' : ''}
                  ${(weekIndex === 0 && dateIndex < 2) || (weekIndex === 4 && dateIndex > 4) ? 'text-muted-foreground/50' : ''}
                `}
              >
                {date}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CalendarWidget;