import { getSpotifyAccessToken, getPlaylistsByMood } from './services/spotify';

import MoodSelector from './components/MoodSelector';
import AIInput from './components/AIInput';

export default async function Home() {
  const accessToken = await getSpotifyAccessToken();
  const playlists = await getPlaylistsByMood('happy', accessToken);

  return (
    <main className=" flex items-center justify-center min-h-screen  text-spotify-white p-8 bg-spotify-black/50 backdrop-blur-xl  font-spotify">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-8 text-center text-spotify-green">
          AI Playlist Generator
        </h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <AIInput />
          <MoodSelector />
          {/* <PlaylistList /> */}
        </div>
      </div>
    </main>
  );
}
