import { 
  LayoutDashboard, 
  UserCheck, 
  BookOpen, 
  Calendar, 
  User, 
  LogOut,
  X 
} from "lucide-react";
import { Button } from "./ui/button";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();
  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/" },
    { icon: UserCheck, label: "Attendance", path: "/attendance" },
    { icon: BookOpen, label: "Classes", path: "/classes" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="w-64 bg-card h-screen p-6 flex flex-col shadow-lg lg:rounded-r-3xl">
      {/* Close button for mobile */}
      {onClose && (
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden self-end mb-4"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>
      )}
      
      {/* University Logo */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-3 shadow-lg">
          <div className="text-primary-foreground font-bold text-xl">U</div>
        </div>
        <span className="text-sm font-medium text-muted-foreground">University</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={index}
              to={item.path}
              onClick={onClose}
              className={({ isActive: linkActive }) => 
                `block w-full text-left transition-all duration-200 ${
                  linkActive || isActive
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start h-12 text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Button>
            </NavLink>
          );
        })}
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