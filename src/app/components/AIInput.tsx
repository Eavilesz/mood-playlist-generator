import { SyntheticEvent, useState } from 'react';

import { getMoodFromCohere } from '@/lib/cohere';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaArrowUp } from 'react-icons/fa';

interface AIInputProps {
  handleMoodChange: (newMood: string) => void;
}

export default function AIInput({ handleMoodChange }: AIInputProps) {
  const [userPrompt, setUserPrompt] = useState<string>('');

  const handleInput = (term: string) => {
    setUserPrompt(term);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (userPrompt.trim().length < 1) return;

    const mood = await getMoodFromCohere(userPrompt);
    handleMoodChange(mood);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-spotify-white">
        Describe your mood:
      </h2>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <Input
            value={userPrompt}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="E.g., 'Feeling like I'm on top of the world'"
            className="h-16 w-full pr-12 text-lg bg-spotify-gray text-spotify-white placeholder-spotify-white/50 border-spotify-green focus:border-spotify-green focus:ring-spotify-green"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-spotify-green hover:bg-spotify-green/80 text-spotify-black rounded-md"
          >
            <FaArrowUp className="h-4 w-4" />
          </Button>
        </form>
      </div>
      <div className="text-sm text-spotify-gray">
        Try: "Excited for a night out" • "Calm and introspective" • "Ready to
        conquer the world"
      </div>
    </div>
  );
}
