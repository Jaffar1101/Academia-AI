import { Search, Filter, Plus, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

const Classes = () => {
  const todayClasses = [
    {
      subject: "Advanced Mathematics",
      professor: "Professor Joe Smith",
      time: "09:00 - 10:30 AM",
      room: "Room 101",
      students: 45,
      status: "ongoing",
      description: "Differential Equations and Linear Algebra"
    },
    {
      subject: "Quantum Physics",
      professor: "Professor John Doe",
      time: "11:00 - 12:30 PM",
      room: "Lab 204",
      students: 32,
      status: "upcoming",
      description: "Introduction to Quantum Mechanics"
    },
    {
      subject: "Organic Chemistry",
      professor: "Professor Matt Wilson",
      time: "02:00 - 03:30 PM",
      room: "Lab 305",
      students: 38,
      status: "upcoming",
      description: "Chemical Reactions and Mechanisms"
    },
    {
      subject: "Molecular Biology",
      professor: "Professor Sarah Davis",
      time: "04:00 - 05:30 PM",
      room: "Room 202",
      students: 28,
      status: "scheduled",
      description: "DNA Structure and Function"
    }
  ];

  const weekSchedule = [
    { day: "Mon", classes: 4 },
    { day: "Tue", classes: 3 },
    { day: "Wed", classes: 5 },
    { day: "Thu", classes: 3 },
    { day: "Fri", classes: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing": return "bg-success text-success-foreground";
      case "upcoming": return "bg-primary text-primary-foreground";
      case "scheduled": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground">My Classes</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search classes..." 
              className="pl-9 w-64 bg-card border-border"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Class
          </Button>
        </div>
      </div>

      {/* Week Overview */}
      <Card>
        <CardHeader>
          <CardTitle>This Week's Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 overflow-x-auto">
            {weekSchedule.map((day, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-accent/50 rounded-lg min-w-[80px]">
                <span className="text-sm font-medium text-muted-foreground">{day.day}</span>
                <span className="text-2xl font-bold text-foreground">{day.classes}</span>
                <span className="text-xs text-muted-foreground">classes</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Today's Classes */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Today's Classes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {todayClasses.map((classItem, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{classItem.subject}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{classItem.description}</p>
                  </div>
                  <Badge className={getStatusColor(classItem.status)}>
                    {classItem.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm">
                      {classItem.professor.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{classItem.professor}</p>
                    <p className="text-xs text-muted-foreground">Instructor</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{classItem.room}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{classItem.students} students</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Join Class
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;