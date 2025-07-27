import { Search, ChevronDown } from "lucide-react";
import ClassCard from "../components/ClassCard";
import AttendanceCard from "../components/AttendanceCard";
import CalendarWidget from "../components/CalendarWidget";
import NewsCard from "../components/NewsCard";

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Classes for the day */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Classes for the day</h2>
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
              <ChevronDown className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
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
        <div className="lg:col-span-5 xl:col-span-4 space-y-6">
          {/* Mark Attendance */}
          <AttendanceCard />
          
          {/* Calendar */}
          <CalendarWidget />
          
          {/* News & Updates for smaller screens */}
          <div className="lg:hidden">
            <NewsCard />
          </div>
        </div>

        {/* News & Updates - Full Width for larger screens */}
        <div className="hidden lg:block lg:col-span-12">
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;