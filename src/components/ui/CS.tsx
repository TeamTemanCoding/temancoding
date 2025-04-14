import { Avatar, Input } from '@heroui/react'
import { PaperPlaneRight } from '@phosphor-icons/react'
import React from 'react'

const CS = () => {
    return (
        <div className='h-[380px] sm:h-[450px] w-[280px] sm:w-[350px] bg-[#070627] shadow-md text-zinc-50 fixed right-7 sm:right-10 bottom-[70px] sm:bottom-20 z-50 rounded-lg'>
            <div className="relative h-full">
                <div className='!px-4 !py-2 h-14 bg-[#241D64] flex items-center gap-4 rounded-t-lg'>
                    <Avatar src="./images/logo-notitle.svg" alt="teman coding" className='bg-white w-7 h-7' isBordered color='success' />
                    <div className='*:tracking-[0.7px]'>
                        <h4 className='text-[13px] sm:text-[15px] font-bold '>Teman Coding Assistant</h4>
                        <p className='text-[8px] sm:text-[10px] font-semibold text-white/65'>Interactive AI assistant for Teman Coding</p>
                    </div>
                </div>
                <div className="px-4">
                    text
                </div>
                <div className='absolute bottom-0 rounded-b-lg bg-[#241D64] w-full h-16 flex items-center px-4 gap-2'>
                    <Input radius='sm' placeholder='Type a message here' variant='bordered' className='!border-white' />
                    <PaperPlaneRight weight='bold' size={30} />
                </div>
            </div>
        </div>
    )
}

export default CS