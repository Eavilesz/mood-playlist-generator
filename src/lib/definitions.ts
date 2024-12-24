export type Playlist = {
  externalURL: string;
  name: string;
  authorName: string;
  image: string;
};

export type PlayListResponse = {
  name: string;
  owner: { display_name: string };
  images: [{ url: string }];
  external_urls: { spotify: string };
};
