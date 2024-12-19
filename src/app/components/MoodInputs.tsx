'use client';

import { useState } from 'react';
import { Playlist } from '@/lib/definitions';
import AIInput from './AIInput';
import MoodSelector from './MoodSelector';
import PlaylistModal from './PlaylistModal';

export const MoodInputs = () => {
  const [fetchedPlaylists, setFetchedPlaylists] = useState<Playlist[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mood, setMood] = useState<string>('');

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AIInput />
      <MoodSelector
        setFetchedPlaylists={setFetchedPlaylists}
        setIsOpen={setIsOpen}
        setMood={setMood}
      />
      {isOpen && (
        <PlaylistModal
          mood={mood}
          isOpen={isOpen}
          onClose={handleClose}
          playlists={fetchedPlaylists}
        />
      )}
    </>
  );
};
