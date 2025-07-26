import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

interface NewsItemProps {
  title: string;
  description: string;
  avatars: string[];
  showReadMore?: boolean;
}

const NewsItem = ({ title, description, avatars, showReadMore }: NewsItemProps) => (
  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
    <div className="flex -space-x-2">
      {avatars.map((avatar, index) => (
        <Avatar key={index} className="w-8 h-8 border-2 border-card">
          <AvatarFallback className="bg-muted text-muted-foreground text-xs">
            {avatar}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-sm font-medium text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const NewsCard = () => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <h3 className="font-semibold text-foreground mb-4">News & Updates</h3>
      
      {/* Featured News with Image */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="font-medium mb-2">Universities to announce exams</h4>
          <p className="text-sm opacity-90 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
            Read more →
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-6 -translate-y-6"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-full transform translate-x-4 translate-y-4"></div>
      </div>
      
      {/* News Items */}
      <div className="space-y-2">
        <NewsItem
          title="Universities to announce"
          description="Lorem ipsum dolor"
          avatars={['JD', 'SM']}
        />
        <NewsItem
          title="Universities to announce"
          description="Lorem ipsum dolor"
          avatars={['AB', 'CD']}
        />
      </div>
    </div>
  );
};

export default NewsCard;