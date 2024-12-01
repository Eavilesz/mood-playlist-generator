import { Button } from '@/components/ui/button';

const moods = [
  'Happy',
  'Relaxed',
  'Melancholic',
  'Romantic',
  'Nostalgic',
  'Peaceful',
];

export default function MoodSelector() {
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
          >
            {mood}
          </Button>
        ))}
      </div>
    </div>
  );
}
