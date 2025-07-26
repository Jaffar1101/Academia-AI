import { Avatar, AvatarFallback } from "./ui/avatar";
import { CalendarDays } from "lucide-react";

interface ClassCardProps {
  subject: string;
  professor: string;
  date: string;
  description: string;
  isNew?: boolean;
}

const ClassCard = ({ subject, professor, date, description, isNew }: ClassCardProps) => {
  return (
    <div className="bg-card p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-foreground">{subject}</h3>
        <div className="flex items-center text-muted-foreground text-sm">
          <CalendarDays className="w-4 h-4 mr-1" />
          {date}
        </div>
        {isNew && (
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
            New
          </span>
        )}
      </div>
      
      <div className="flex items-center mb-3">
        <Avatar className="w-8 h-8 mr-2">
          <AvatarFallback className="bg-muted text-muted-foreground text-sm">
            {professor.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground">{professor}</span>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ClassCard;