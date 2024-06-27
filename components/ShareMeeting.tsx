"use client";
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { useEffect } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Image from 'next/image';
  

const ShareMeeting = () => {
    const router = useRouter();
    const call = useCall();
    const{ useLocalParticipant } = useCallStateHooks();
    const LocalParticipant = useLocalParticipant();
    const isMeetingOwner = LocalParticipant && call?.state.createdBy && LocalParticipant.userId === call.state.createdBy.id;

    const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: document.title,
              text: 'Check out this page!',
              url: window.location.href,
            });
            console.log('Page shared successfully');
          } catch (error) {
            console.error('Error sharing:', error);
          }
        } else {
          alert('Web Share API is not supported in your browser.');
        }};

    if(!isMeetingOwner) return null;

  return (
    <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
            <Button className='bg-[#19232d] rounded-full' onClick={handleShare}>
            <Image src='/icons/share.svg' alt='share' width={20} height={20} />
            </Button>     
        </TooltipTrigger>
        <TooltipContent className='bg-dark-1 text-white border-none'>
        <p>Share Meeting</p>
        </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  )
}

export default ShareMeeting