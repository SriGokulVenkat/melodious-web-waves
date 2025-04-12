
import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import AlbumCard from '@/components/cards/AlbumCard';
import PlaylistCard from '@/components/cards/PlaylistCard';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

// Mock data
const searchResults = {
  albums: [
    { id: 'a1', title: 'Midnight', artist: 'Taylor Swift', coverUrl: 'https://source.unsplash.com/random/300x300?album-1' },
    { id: 'a2', title: 'The Lockdown Sessions', artist: 'Elton John', coverUrl: 'https://source.unsplash.com/random/300x300?album-2' },
    { id: 'a3', title: 'SOUR', artist: 'Olivia Rodrigo', coverUrl: 'https://source.unsplash.com/random/300x300?album-3' },
  ],
  playlists: [
    { id: 'p1', title: 'Today\'s Top Hits', description: 'Ed Sheeran is on top of the Hottest 50!', coverUrl: 'https://source.unsplash.com/random/300x300?concert-1' },
    { id: 'p2', title: 'RapCaviar', description: 'New music from Drake, Kendrick Lamar and more', coverUrl: 'https://source.unsplash.com/random/300x300?hiphop-1' },
    { id: 'p3', title: 'All Out 2010s', description: 'The biggest songs of the 2010s', coverUrl: 'https://source.unsplash.com/random/300x300?party-1' },
  ],
};

const genres = [
  { id: 'g1', title: 'Pop', coverUrl: 'https://source.unsplash.com/random/300x300?pop' },
  { id: 'g2', title: 'Hip-Hop', coverUrl: 'https://source.unsplash.com/random/300x300?hiphop' },
  { id: 'g3', title: 'Rock', coverUrl: 'https://source.unsplash.com/random/300x300?rock' },
  { id: 'g4', title: 'Dance/Electronic', coverUrl: 'https://source.unsplash.com/random/300x300?electronic' },
  { id: 'g5', title: 'R&B', coverUrl: 'https://source.unsplash.com/random/300x300?rnb' },
  { id: 'g6', title: 'Indie', coverUrl: 'https://source.unsplash.com/random/300x300?indie' },
  { id: 'g7', title: 'Latin', coverUrl: 'https://source.unsplash.com/random/300x300?latin' },
  { id: 'g8', title: 'Jazz', coverUrl: 'https://source.unsplash.com/random/300x300?jazz' },
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setHasSearched(true);
      toast({
        title: "Search performed",
        description: `Searching for: ${query}`,
      });
    }
  };

  const handlePlayAlbum = (id: string) => {
    toast({
      title: "Playing album",
      description: `Started playing album with ID: ${id}`,
    });
  };

  const handlePlayPlaylist = (id: string) => {
    toast({
      title: "Playing playlist",
      description: `Started playing playlist with ID: ${id}`,
    });
  };

  return (
    <MainLayout>
      <div className="mb-8">
        <form onSubmit={handleSearch} className="relative max-w-xl">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-secondary-foreground" />
          <Input
            type="search"
            placeholder="What do you want to listen to?"
            className="bg-muted text-white pl-10 py-6 rounded-full focus-visible:ring-spotify"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>

      {hasSearched ? (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {searchResults.albums.map(album => (
                <AlbumCard 
                  key={album.id} 
                  id={album.id}
                  title={album.title}
                  artist={album.artist}
                  coverUrl={album.coverUrl}
                  onPlay={handlePlayAlbum}
                />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {searchResults.playlists.map(playlist => (
                <PlaylistCard 
                  key={playlist.id} 
                  id={playlist.id}
                  title={playlist.title}
                  description={playlist.description}
                  coverUrl={playlist.coverUrl}
                  onPlay={handlePlayPlaylist}
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Browse all</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {genres.map((genre) => (
              <div 
                key={genre.id} 
                className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
                style={{ backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)` }}
              >
                <img 
                  src={genre.coverUrl} 
                  alt={genre.title}
                  className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover rotate-12 translate-x-1/4 translate-y-1/4 shadow-xl transform group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{genre.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Search;
