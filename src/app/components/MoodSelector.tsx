import { Button } from '@/components/ui/button';

const moodOptions = [
  'Happy',
  'Relaxed',
  'Melancholic',
  'Romantic',
  'Nostalgic',
  'Peaceful',
];

interface MoodSelectorProps {
  handleMoodChange: (newMood: string) => void;
}

export default function MoodSelector({ handleMoodChange }: MoodSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {moodOptions.map((mood) => (
          <Button
            key={mood}
            variant="outline"
            className="h-12 text-md font-bold bg-spotify-gray text-spotify-white border-spotify-green hover:bg-spotify-green hover:text-spotify-black transition-colors duration-200"
            onClick={() => handleMoodChange(mood.toLowerCase())}
          >
            {mood}
          </Button>
        ))}
      </div>
    </div>
  );
}
