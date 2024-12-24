'use client';

import { useMoods } from '@/lib/hooks';
import AIInput from './AIInput';
import MoodSelector from './MoodSelector';
import PlaylistModal from './PlaylistModal';

export const MoodInputs = () => {
  const { isOpen, setIsOpen, mood, fetchedPlaylists, handleMoodChange } =
    useMoods();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <AIInput handleMoodChange={handleMoodChange} />
      <MoodSelector handleMoodChange={handleMoodChange} />
      {isOpen && (
        <PlaylistModal
          mood={mood}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          playlists={fetchedPlaylists}
        />
      )}
    </div>
  );
};
