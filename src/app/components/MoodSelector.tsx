import { Button } from '@/components/ui/button';

import { Playlist } from '@/lib/definitions';
import { getPlaylistsByMood } from '../actions/actions';
import { Dispatch, SetStateAction } from 'react';

const moods = [
  'Happy',
  'Relaxed',
  'Melancholic',
  'Romantic',
  'Nostalgic',
  'Peaceful',
];

interface MoodSelectorProps {
  setFetchedPlaylists: Dispatch<SetStateAction<Playlist[]>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setMood: Dispatch<SetStateAction<string>>;
}

export default function MoodSelector({
  setFetchedPlaylists,
  setIsOpen,
  setMood,
}: MoodSelectorProps) {
  const handleSelect = async (newMood: string) => {
    const playlists = await getPlaylistsByMood(newMood);

    setFetchedPlaylists(playlists);
    setMood(newMood);
    setIsOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {moods.map((mood) => (
          <Button
            key={mood}
            variant="outline"
            className="h-12 text-md font-bold bg-spotify-gray text-spotify-white border-spotify-green hover:bg-spotify-green hover:text-spotify-black transition-colors duration-200"
            onClick={() => handleSelect(mood.toLowerCase())}
          >
            {mood}
          </Button>
        ))}
      </div>
    </div>
  );
}
