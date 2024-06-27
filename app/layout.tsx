import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { Toaster } from "@/components/ui/toaster"
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "connect with Boom",
  description: "Boom a video conference meeting website",
  keywords:"Boom, meeting, conference, video, online, call, meet, meetings ",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1.0",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/boom-logo.svg',
          },
          variables:{
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252a41',
            colorInputText: '#fff'
          }
        }}
      >
        <body className={'${inter.className} bg-dark-2'}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
