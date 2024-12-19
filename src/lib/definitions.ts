export type Playlist = {
  name: string;
  authorName: string;
  image: string;
};

export type PlayListResponse = {
  name: string;
  owner: { display_name: string };
  images: [{ url: string }];
};
