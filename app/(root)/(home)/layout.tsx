import React, {ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "connect with Boom",
  description: "Boom a video conference meeting website",
  keywords:"Boom, meeting, conference, video, online, call, meet, meetings ",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1.0",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const HomeLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>

        <div className='flex'>
            <Sidebar/>

            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}
                </div>
            </section> 
        </div>

        <Footer/>
    </main>
  )
}

export default HomeLayout