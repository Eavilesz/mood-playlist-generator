import { Playlist } from '@/lib/definitions';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PlaylistModalProps {
  mood: string;
  isOpen: boolean;
  onClose: () => void;
  playlists: Playlist[];
}

export default function PlaylistModal({
  mood,
  isOpen,
  onClose,
  playlists,
}: PlaylistModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-[425px] bg-spotify-black text-spotify-white"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-spotify-green">
            {mood.toUpperCase()} Playlists
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh]">
          <div className="space-y-4 pr-4">
            {playlists.map((playlist) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={playlist.externalURL}
                key={`${playlist.name} from ${playlist.authorName}`}
                className="flex items-center space-x-4 p-4 bg-spotify-gray rounded-lg hover:bg-spotify-green transition-colors duration-200 group cursor-pointer"
              >
                <Avatar className="h-16 w-16">
                  <AvatarImage src={playlist.image} alt={playlist.name} />
                  <AvatarFallback>{playlist.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-spotify-white group-hover:text-spotify-black">
                    {playlist.name}
                  </h3>
                  <p className="text-sm text-spotify-white/70 group-hover:text-spotify-black/70">
                    by {playlist.authorName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
