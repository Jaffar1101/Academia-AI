import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const events = [
    { date: "2024-01-25", title: "Mathematics Exam", type: "exam", time: "09:00 AM" },
    { date: "2024-01-26", title: "Physics Lab", type: "lab", time: "02:00 PM" },
    { date: "2024-01-27", title: "Chemistry Assignment Due", type: "assignment", time: "11:59 PM" },
    { date: "2024-01-28", title: "Biology Lecture", type: "lecture", time: "10:00 AM" },
    { date: "2024-01-29", title: "Group Project Presentation", type: "presentation", time: "03:00 PM" },
  ];

  const upcomingEvents = [
    { title: "Mid-term Exams", date: "Feb 15-20", type: "exam" },
    { title: "Science Fair", date: "Mar 5", type: "event" },
    { title: "Spring Break", date: "Mar 15-22", type: "holiday" },
    { title: "Final Exams", date: "May 10-15", type: "exam" },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const hasEvent = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(event => event.date === dateStr);
  };

  const getEventType = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const event = events.find(event => event.date === dateStr);
    return event?.type || '';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "exam": return "bg-destructive text-destructive-foreground";
      case "lab": return "bg-primary text-primary-foreground";
      case "assignment": return "bg-warning text-warning-foreground";
      case "lecture": return "bg-success text-success-foreground";
      case "presentation": return "bg-secondary text-secondary-foreground";
      case "event": return "bg-accent text-accent-foreground";
      case "holiday": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEventToday = hasEvent(day);
      const eventType = getEventType(day);
      
      days.push(
        <div
          key={day}
          className={`h-10 flex items-center justify-center text-sm cursor-pointer rounded-lg transition-colors ${
            hasEventToday 
              ? 'bg-primary text-primary-foreground font-medium' 
              : 'hover:bg-accent'
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground">Academic Calendar</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateMonth(-1)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateMonth(1)}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendarDays()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Sidebar */}
        <div className="space-y-6">
          {/* Today's Events */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {events.slice(0, 3).map((event, index) => (
                <div key={index} className="p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <Badge className={getTypeColor(event.type)} variant="secondary">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <Badge className={getTypeColor(event.type)} variant="outline">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;