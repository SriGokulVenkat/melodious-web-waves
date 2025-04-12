
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import AlbumCard from '@/components/cards/AlbumCard';
import PlaylistCard from '@/components/cards/PlaylistCard';
import { toast } from '@/components/ui/use-toast';

// Mock data
const featuredPlaylists = [
  { id: 'p1', title: 'Today\'s Top Hits', description: 'Ed Sheeran is on top of the Hottest 50!', coverUrl: 'https://source.unsplash.com/random/300x300?concert-1' },
  { id: 'p2', title: 'RapCaviar', description: 'New music from Drake, Kendrick Lamar and more', coverUrl: 'https://source.unsplash.com/random/300x300?hiphop-1' },
  { id: 'p3', title: 'All Out 2010s', description: 'The biggest songs of the 2010s', coverUrl: 'https://source.unsplash.com/random/300x300?party-1' },
  { id: 'p4', title: 'Rock Classics', description: 'Rock legends & epic songs that continue to inspire generations', coverUrl: 'https://source.unsplash.com/random/300x300?rock-1' },
  { id: 'p5', title: 'Chill Hits', description: 'Kick back to the best new and recent chill hits', coverUrl: 'https://source.unsplash.com/random/300x300?chill-1' },
];

const newReleases = [
  { id: 'a1', title: 'Midnight', artist: 'Taylor Swift', coverUrl: 'https://source.unsplash.com/random/300x300?album-1' },
  { id: 'a2', title: 'The Lockdown Sessions', artist: 'Elton John', coverUrl: 'https://source.unsplash.com/random/300x300?album-2' },
  { id: 'a3', title: 'SOUR', artist: 'Olivia Rodrigo', coverUrl: 'https://source.unsplash.com/random/300x300?album-3' },
  { id: 'a4', title: '30', artist: 'Adele', coverUrl: 'https://source.unsplash.com/random/300x300?album-4' },
  { id: 'a5', title: 'Justice', artist: 'Justin Bieber', coverUrl: 'https://source.unsplash.com/random/300x300?album-5' },
];

const recommendedForYou = [
  { id: 'p6', title: 'Discover Weekly', description: 'Your weekly mixtape of fresh music', coverUrl: 'https://source.unsplash.com/random/300x300?mix-1' },
  { id: 'p7', title: 'Release Radar', description: 'Catch all the latest music from artists you follow', coverUrl: 'https://source.unsplash.com/random/300x300?radar-1' },
  { id: 'p8', title: 'Your Time Capsule', description: 'Songs to take you back from your past', coverUrl: 'https://source.unsplash.com/random/300x300?vintage-1' },
  { id: 'p9', title: 'Mood Booster', description: 'Uplifting and energetic songs to boost your mood!', coverUrl: 'https://source.unsplash.com/random/300x300?happy-1' },
  { id: 'p10', title: 'Daily Drive', description: 'A mix of news and music made for your commute', coverUrl: 'https://source.unsplash.com/random/300x300?drive-1' },
];

const Index = () => {
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
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white mb-6">Good afternoon</h1>
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Featured Playlists</h2>
            <a href="#" className="text-secondary-foreground text-sm font-semibold hover:underline">See all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredPlaylists.map(playlist => (
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
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">New Releases</h2>
            <a href="#" className="text-secondary-foreground text-sm font-semibold hover:underline">See all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {newReleases.map(album => (
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
            <a href="#" className="text-secondary-foreground text-sm font-semibold hover:underline">See all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {recommendedForYou.map(playlist => (
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
    </MainLayout>
  );
};

export default Index;
