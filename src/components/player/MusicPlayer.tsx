
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Repeat, Shuffle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(30);
  const [isLiked, setIsLiked] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="h-20 bg-black border-t border-border px-4 flex items-center">
      <div className="w-1/3 flex items-center gap-3">
        <img 
          src="https://source.unsplash.com/random/80x80?music" 
          alt="Album cover" 
          className="h-14 w-14 rounded"
        />
        <div>
          <h4 className="text-sm font-medium text-white text-spotify-truncate">Shape of You</h4>
          <p className="text-xs text-secondary-foreground text-spotify-truncate">Ed Sheeran</p>
        </div>
        <button 
          onClick={toggleLike} 
          className={`ml-4 focus:outline-none ${isLiked ? 'text-spotify' : 'text-secondary-foreground hover:text-white'}`}
        >
          <Heart className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="w-1/3 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <button className="text-secondary-foreground hover:text-white focus:outline-none">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-secondary-foreground hover:text-white focus:outline-none">
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            onClick={togglePlay} 
            className="bg-white rounded-full p-2 text-black hover:scale-105 transition focus:outline-none"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button className="text-secondary-foreground hover:text-white focus:outline-none">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-secondary-foreground hover:text-white focus:outline-none">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-secondary-foreground min-w-[40px] text-right">1:12</span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={(value) => setProgress(value[0])}
          />
          <span className="text-xs text-secondary-foreground min-w-[40px]">3:45</span>
        </div>
      </div>

      <div className="w-1/3 flex justify-end items-center gap-2">
        <Volume2 className="h-4 w-4 text-secondary-foreground" />
        <Slider
          value={[volume]}
          max={100}
          step={1}
          className="w-24"
          onValueChange={(value) => setVolume(value[0])}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
