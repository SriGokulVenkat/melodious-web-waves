
import React from 'react';
import Sidebar from './Sidebar';
import MusicPlayer from '../player/MusicPlayer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default MainLayout;
