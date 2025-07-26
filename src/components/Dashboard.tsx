import { Search, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Sidebar from "./Sidebar";
import ClassCard from "./ClassCard";
import AttendanceCard from "./AttendanceCard";
import CalendarWidget from "./CalendarWidget";
import NewsCard from "./NewsCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-foreground">Welcome, Student!</h1>
            <span className="bg-success text-success-foreground text-sm px-3 py-1 rounded-full font-medium">
              Active
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64 bg-card border-border"
              />
            </div>
            <Bell className="w-6 h-6 text-muted-foreground cursor-pointer" />
            <Avatar className="w-10 h-10 cursor-pointer">
              <AvatarFallback className="bg-muted">ST</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Classes for the day */}
          <div className="col-span-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Classes for the day</h2>
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-muted-foreground cursor-pointer" />
                <ChevronDown className="w-5 h-5 text-muted-foreground cursor-pointer" />
              </div>
            </div>
            
            <div className="space-y-4">
              <ClassCard
                subject="Mathematics"
                professor="Professor Joe"
                date="5/2/22"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et"
              />
              <ClassCard
                subject="Physics"
                professor="Professor John"
                date="5/2/22"
                description="Lorem ipsum dolor sit amet, consectetur"
              />
              <ClassCard
                subject="Chemistry"
                professor="Professor Matt"
                date="5/2/22"
                description="Lorem ipsum dolor sit amet, consectetur"
                isNew={true}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-6 space-y-6">
            {/* Mark Attendance */}
            <AttendanceCard />
            
            {/* Calendar */}
            <CalendarWidget />
            
            {/* News & Updates */}
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;