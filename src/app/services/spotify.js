import axios from 'axios';

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search';

export const getSpotifyAccessToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const headers = {
    Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const response = await axios.post(SPOTIFY_TOKEN_URL, params, { headers });

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching Spotify access token:', error);

    return null;
  }
};

export const getPlaylistsByMood = async (mood, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await axios.get(SPOTIFY_SEARCH_URL, {
      headers,
      params: { q: mood, type: 'playlist', limit: 10 },
    });

    return response.data.playlists.items;
  } catch (error) {
    console.error('Error fetching playlists:', error);
  }
};
