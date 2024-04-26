import '@/assets/app.css';
import '@/assets/font.css';
import '@/assets/global.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript } from '@mantine/core';

import type { Metadata } from "next";
import ThemeProvider from './ThemeProvider';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: "Work Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
