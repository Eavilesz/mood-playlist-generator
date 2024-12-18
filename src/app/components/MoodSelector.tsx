'use client';

import { Button } from '@/components/ui/button';
import PlaylistModal from './PlaylistModal';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const moods = [
  'Happy',
  'Relaxed',
  'Melancholic',
  'Romantic',
  'Nostalgic',
  'Peaceful',
];

interface MoodSelectorProps {
  // selectedMood: string | null;
  // setSelectedMood: (mood: string | null) => void;
}

export default function MoodSelector({}: // selectedMood,
// setSelectedMood,
MoodSelectorProps) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const isRequested = searchParams.get('requested');
  const previousMood = searchParams.get('mood');

  const handleSelect = (newMood: string) => {
    const params = new URLSearchParams(searchParams);

    if (newMood) {
      params.set('mood', newMood);
      params.set('requested', 'true');
    } else {
      params.delete('mood');
    }

    replace(`${pathName}?${params.toString()}`);
  };

  const handleClose = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('requested');
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-spotify-white">
        Quick mood selection:
      </h2>
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
      {isRequested && (
        <PlaylistModal
          mood={previousMood}
          isOpen={!!isRequested}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
