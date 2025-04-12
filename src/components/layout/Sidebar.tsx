
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black flex flex-col h-full">
      <div className="p-6">
        <div className="text-2xl font-bold text-white flex items-center gap-2 mb-8">
          <svg className="h-8 w-8 text-spotify" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5571 16.2571C16.3215 16.5871 15.8785 16.68 15.5485 16.4443C13.2057 14.9657 10.32 14.6871 6.8485 15.4785C6.4685 15.5643 6.10857 15.3285 6.02285 14.9485C5.93715 14.5685 6.17285 14.2086 6.55285 14.1228C10.44 13.2343 13.68 13.5657 16.3685 15.2485C16.6985 15.4843 16.7915 15.9271 16.5571 16.2571ZM17.8357 13.5428C17.5414 13.9514 16.9828 14.0657 16.5743 13.7714C13.8385 12.0457 9.91998 11.6343 6.77427 12.6428C6.31427 12.7842 5.84141 12.5214 5.69998 12.0614C5.55855 11.6014 5.82144 11.1285 6.28141 10.9871C9.94284 9.82995 14.3228 10.2928 17.6071 12.3814C18.0157 12.6757 18.13 13.2342 17.8357 13.5428ZM17.9528 10.7628C14.6385 8.71992 9.38284 8.53992 6.27713 9.52135C5.71999 9.69707 5.13142 9.37278 4.95571 8.81563C4.77999 8.25849 5.10427 7.66992 5.66142 7.49421C9.26999 6.34278 15.1328 6.56135 19.0257 8.94278C19.5243 9.24707 19.6743 9.89707 19.37 10.3957C19.0657 10.8957 18.4157 11.0457 17.9157 10.7414L17.9528 10.7628Z" />
          </svg>
          <span>Melodify</span>
        </div>
        
        <nav className="space-y-6">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-4 text-white hover:text-spotify transition duration-200 font-medium">
              <Home className="h-6 w-6" />
              <span>Home</span>
            </Link>
            <Link to="/search" className="flex items-center gap-4 text-secondary-foreground hover:text-white transition duration-200 font-medium">
              <Search className="h-6 w-6" />
              <span>Search</span>
            </Link>
            <Link to="/library" className="flex items-center gap-4 text-secondary-foreground hover:text-white transition duration-200 font-medium">
              <Library className="h-6 w-6" />
              <span>Your Library</span>
            </Link>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-muted">
            <Link to="/create-playlist" className="flex items-center gap-4 text-secondary-foreground hover:text-white transition duration-200 font-medium">
              <PlusSquare className="h-6 w-6" />
              <span>Create Playlist</span>
            </Link>
            <Link to="/liked" className="flex items-center gap-4 text-secondary-foreground hover:text-white transition duration-200 font-medium">
              <Heart className="h-6 w-6" />
              <span>Liked Songs</span>
            </Link>
          </div>
        </nav>
      </div>
      
      <div className="mt-auto p-6">
        <div className="text-xs text-secondary-foreground mb-6">
          <a href="#" className="hover:underline mr-4">Cookies</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
