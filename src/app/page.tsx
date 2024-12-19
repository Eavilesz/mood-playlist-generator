import { AiIcon } from './components/AiIcon';
import { MoodInputs } from './components/MoodInputs';
import MoodSelector from './components/MoodSelector';
import AIInput from './components/AIInput';

export default async function Home() {
  return (
    <main className=" flex items-center justify-center min-h-screen  text-spotify-white p-8 bg-spotify-black/50 backdrop-blur-xl  font-spotify">
      <div className="md:w-1/2">
        <h1 className=" flex text-4xl font-bold mb-8 justify-center text-spotify-green gap-1">
          AI Playlist Generator
          <AiIcon />
        </h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <MoodInputs />
        </div>
      </div>
    </main>
  );
}
