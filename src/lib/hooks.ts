import { useState } from 'react';
import { Playlist } from './definitions';
import { getPlaylistsByMood } from './spotify';

export const useMoods = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mood, setMood] = useState<string>('');
  const [fetchedPlaylists, setFetchedPlaylists] = useState<Playlist[]>([]);

  const handleMoodChange = async (newMood: string) => {
    const playlists = await getPlaylistsByMood(newMood);

    setFetchedPlaylists(playlists);
    setMood(newMood);
    setIsOpen(true);
  };

  return {
    isOpen,
    setIsOpen,
    mood,
    setMood,
    fetchedPlaylists,
    setFetchedPlaylists,
    handleMoodChange,
  };
};
