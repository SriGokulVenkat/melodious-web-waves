
import React from 'react';
import { Play } from 'lucide-react';

interface PlaylistCardProps {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  onPlay: (id: string) => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ id, title, description, coverUrl, onPlay }) => {
  return (
    <div className="bg-card p-4 rounded-md hover:bg-muted transition duration-200 group cursor-pointer">
      <div className="relative mb-4">
        <img 
          src={coverUrl} 
          alt={title} 
          className="w-full aspect-square object-cover rounded-md shadow-md"
        />
        <button 
          onClick={() => onPlay(id)}
          className="absolute right-2 bottom-2 bg-spotify rounded-full p-3 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:scale-105"
        >
          <Play fill="black" className="h-4 w-4 text-black" />
        </button>
      </div>
      <h3 className="font-semibold text-white truncate">{title}</h3>
      <p className="text-sm text-secondary-foreground line-clamp-2">{description}</p>
    </div>
  );
};

export default PlaylistCard;
