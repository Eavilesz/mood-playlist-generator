import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'SpotifAI',
  description: "Let's find the perfect playlist for you!",
};

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased bg-spotify-black bg-[url(/spotify-icon.svg)] bg-no-repeat bg-contain bg-center`}
      >
        {children}
      </body>
    </html>
  );
}
