import { 
  LayoutDashboard, 
  UserCheck, 
  BookOpen, 
  Calendar, 
  User, 
  LogOut 
} from "lucide-react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: UserCheck, label: "Attendance", active: false },
    { icon: BookOpen, label: "Classes", active: false },
    { icon: Calendar, label: "Calendar", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <div className="w-64 bg-card h-screen p-6 flex flex-col shadow-lg rounded-r-3xl">
      {/* University Logo */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-3">
          <div className="text-primary-foreground font-bold text-xl">U</div>
        </div>
        <span className="text-sm font-medium text-muted-foreground">University</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start h-12 text-sm font-medium ${
              item.active 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Sign Out Button */}
      <Button 
        variant="ghost" 
        className="w-full justify-start h-12 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent mt-4"
      >
        <LogOut className="w-5 h-5 mr-3" />
        Sign Out
      </Button>
    </div>
  );
};

export default Sidebar;