import { AIIcon } from './components/AIIcon';
import { MoodInputs } from './components/MoodInputs';

export default async function Home() {
  return (
    <main className=" flex items-center justify-center min-h-screen  text-spotify-white p-8 bg-spotify-black/50 backdrop-blur-xl  font-spotify">
      <div className="md:w-1/2">
        <h1 className=" flex text-4xl font-bold mb-8 justify-center text-spotify-green gap-1">
          AI Playlist Generator
          <AIIcon />
        </h1>
        <MoodInputs />
      </div>
    </main>
  );
}
