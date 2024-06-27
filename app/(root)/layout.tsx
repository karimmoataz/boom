import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "connect with Boom",
  description: "Boom a video conference meeting website",
  keywords:"Boom, meeting, conference, video, online, call, meet, meetings ",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1.0",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout