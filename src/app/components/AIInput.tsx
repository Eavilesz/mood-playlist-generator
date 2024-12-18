'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaArrowUp } from 'react-icons/fa';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { SyntheticEvent } from 'react';

export default function AIInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleInput = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('mood', term);
    } else {
      params.delete('mood');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-spotify-white">
        Describe your mood:
      </h2>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <Input
            defaultValue={searchParams.get('mood')?.toString()}
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
