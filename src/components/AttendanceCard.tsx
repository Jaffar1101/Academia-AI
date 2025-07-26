import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Share2, ChevronLeft, ChevronRight } from "lucide-react";

const AttendanceCard = () => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Mark attendance</h3>
        <Share2 className="w-5 h-5 text-muted-foreground cursor-pointer" />
      </div>
      
      <div className="mb-4">
        <Input 
          placeholder="Mathematics" 
          className="bg-accent border-border"
          value="Mathematics"
          readOnly
        />
        <p className="text-xs text-muted-foreground mt-1">09:00 AM</p>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <ChevronLeft className="w-5 h-5 text-muted-foreground cursor-pointer" />
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5, 6, 7].map((day, index) => (
            <div 
              key={day}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm ${
                index === 2 ? 'bg-primary text-primary-foreground' : 'bg-accent text-muted-foreground'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground cursor-pointer" />
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Present
      </Button>
    </div>
  );
};

export default AttendanceCard;