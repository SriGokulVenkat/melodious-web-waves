
import React, { useState } from 'react';
import { Clock, Filter, Grid, List, Search as SearchIcon } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// Mock data
const libraryItems = [
  { 
    id: 'l1', 
    type: 'playlist',
    title: 'Liked Songs', 
    creator: 'You', 
    coverUrl: 'https://source.unsplash.com/random/300x300?music-1',
    pinned: true,
    trackCount: 137,
    lastPlayed: '2 days ago'
  },
  { 
    id: 'l2', 
    type: 'playlist',
    title: 'Your Top Songs 2023', 
    creator: 'Spotify', 
    coverUrl: 'https://source.unsplash.com/random/300x300?party-2',
    pinned: false,
    trackCount: 50,
    lastPlayed: '3 weeks ago'
  },
  { 
    id: 'l3', 
    type: 'album',
    title: 'Thriller', 
    creator: 'Michael Jackson', 
    coverUrl: 'https://source.unsplash.com/random/300x300?concert-2',
    pinned: false,
    trackCount: 9,
    lastPlayed: '1 month ago'
  },
  { 
    id: 'l4', 
    type: 'playlist',
    title: 'Workout Mix', 
    creator: 'You', 
    coverUrl: 'https://source.unsplash.com/random/300x300?workout',
    pinned: true,
    trackCount: 42,
    lastPlayed: 'Yesterday'
  },
  { 
    id: 'l5', 
    type: 'album',
    title: 'Back in Black', 
    creator: 'AC/DC', 
    coverUrl: 'https://source.unsplash.com/random/300x300?rock-2',
    pinned: false,
    trackCount: 10,
    lastPlayed: '3 days ago'
  },
  { 
    id: 'l6', 
    type: 'playlist',
    title: 'Chill Vibes', 
    creator: 'You', 
    coverUrl: 'https://source.unsplash.com/random/300x300?chill-2',
    pinned: false,
    trackCount: 65,
    lastPlayed: '5 days ago'
  },
];

type ViewMode = 'grid' | 'list';

const Library = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(libraryItems);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredItems(libraryItems);
    } else {
      const filtered = libraryItems.filter(
        item => item.title.toLowerCase().includes(query.toLowerCase()) ||
               item.creator.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  const handlePlay = (id: string) => {
    const item = libraryItems.find(item => item.id === id);
    toast({
      title: `Playing ${item?.type}`,
      description: `Started playing ${item?.title} by ${item?.creator}`,
    });
  };

  return (
    <MainLayout>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Your Library</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-secondary-foreground" />
            <Input
              type="search"
              placeholder="Search in your library"
              className="bg-muted pl-9 py-5 rounded-full h-9 max-w-[200px] md:max-w-xs focus-visible:ring-spotify"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Filter className="h-5 w-5 text-secondary-foreground hover:text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover text-popover-foreground border-border">
              <DropdownMenuItem>Playlists</DropdownMenuItem>
              <DropdownMenuItem>Albums</DropdownMenuItem>
              <DropdownMenuItem>Artists</DropdownMenuItem>
              <DropdownMenuItem>Downloaded</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" onClick={toggleViewMode}>
            {viewMode === 'grid' ? (
              <List className="h-5 w-5 text-secondary-foreground hover:text-white" />
            ) : (
              <Grid className="h-5 w-5 text-secondary-foreground hover:text-white" />
            )}
          </Button>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg text-secondary-foreground mb-2">No results found for "{searchQuery}"</p>
          <p className="text-sm text-muted-foreground">Try searching for something else</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-card p-4 rounded-md hover:bg-muted transition duration-200 group cursor-pointer"
              onClick={() => handlePlay(item.id)}
            >
              <div className="relative mb-4">
                <img 
                  src={item.coverUrl} 
                  alt={item.title} 
                  className="w-full aspect-square object-cover rounded-md shadow-md"
                />
                {item.pinned && (
                  <div className="absolute top-2 left-2 bg-spotify text-xs text-black font-medium py-0.5 px-2 rounded-full">
                    Pinned
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-white truncate">{item.title}</h3>
              <p className="text-sm text-secondary-foreground truncate">
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)} • {item.creator}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-md overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-secondary-foreground">#</th>
                <th className="text-left p-4 text-sm font-medium text-secondary-foreground">Title</th>
                <th className="text-left p-4 text-sm font-medium text-secondary-foreground hidden md:table-cell">Type</th>
                <th className="text-left p-4 text-sm font-medium text-secondary-foreground hidden md:table-cell">Last played</th>
                <th className="text-left p-4 text-sm font-medium text-secondary-foreground hidden lg:table-cell">
                  <Clock className="h-4 w-4" />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr 
                  key={item.id} 
                  className="hover:bg-muted/50 group cursor-pointer"
                  onClick={() => handlePlay(item.id)}
                >
                  <td className="p-4 text-secondary-foreground">{index + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.coverUrl} 
                        alt={item.title}
                        className="h-10 w-10 rounded object-cover"
                      />
                      <div>
                        <p className="text-white group-hover:text-spotify">{item.title}</p>
                        <p className="text-sm text-secondary-foreground">{item.creator}</p>
                      </div>
                      {item.pinned && (
                        <span className="text-xs bg-spotify text-black font-medium py-0.5 px-2 rounded-full">
                          Pinned
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-secondary-foreground hidden md:table-cell">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </td>
                  <td className="p-4 text-secondary-foreground hidden md:table-cell">{item.lastPlayed}</td>
                  <td className="p-4 text-secondary-foreground hidden lg:table-cell">{item.trackCount} tracks</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </MainLayout>
  );
};

export default Library;
