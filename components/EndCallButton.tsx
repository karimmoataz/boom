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
  

const EndCallButton = () => {
    const router = useRouter();
    const call = useCall();
    const{ useLocalParticipant } = useCallStateHooks();
    const LocalParticipant = useLocalParticipant();
    const isMeetingOwner = LocalParticipant && call?.state.createdBy && LocalParticipant.userId === call.state.createdBy.id;

    

    if(!isMeetingOwner) return null;

  return (
    <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
            <Button className='bg-[#dc433b] rounded-xl' onClick={async () => {
            await call.endCall();
            router.push('/')
            }}>
            End
            </Button>     
        </TooltipTrigger>
        <TooltipContent className='bg-dark-1 text-white border-none'>
        <p>Everyone will leave the call</p>
        </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  )
}

export default EndCallButton