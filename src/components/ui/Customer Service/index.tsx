"use client"

import { Avatar, Input } from '@heroui/react'
import { PaperPlaneRight } from '@phosphor-icons/react'
import useChat from '~/hooks/useChat'
import SuggestionButtons from './SuggestionButtons'
import ChatBubble from './ChatBubble'
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import loadingAnimation from '~/lottie-animations/loading.json'


const CustomerService = ({ className }: { className?: string }) => {
  const { text, setText, messages, suggestions, handleSend, isLoading } = useChat()

  return (
    <div className={`h-[380px] sm:h-[450px] w-[280px] sm:w-[350px] bg-[#070627] shadow-md text-zinc-50 rounded-lg flex flex-col ${className}`}>
      <div className="!px-4 !py-2 h-14 bg-[#241D64] flex items-center gap-4 rounded-t-lg">
        <Avatar src="./images/logo-notitle.svg" alt="teman coding" className='bg-white w-7 h-7' isBordered color='success' />
        <div className='*:tracking-[0.7px]'>
          <h4 className='text-[13px] sm:text-[15px] font-bold'>Teman Coding Assistant</h4>
          <p className='text-[8px] sm:text-[10px] font-semibold text-white/65'>Interactive AI assistant for Teman Coding</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 space-y-3 text-sm">
        {messages.map((msg, index) => (
          <ChatBubble key={index} from={msg.from} text={msg.text} />
        ))}

        {isLoading && (
          <div className="w-full flex justify-start">
            <Lottie
              animationData={loadingAnimation}
              loop
              className="w-[60px] h-[60px] -ml-2"
            />
          </div>
        )}

        <SuggestionButtons suggestions={suggestions} onSelect={handleSend} />
      </div>

      <div className='rounded-b-lg bg-[#241D64] w-full h-16 flex items-center px-4 gap-2'>
        <Input
          radius='sm'
          placeholder='Ketik di sini...'
          variant='bordered'
          className='!border-white'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <PaperPlaneRight
          weight='bold'
          size={30}
          className='cursor-pointer hover:opacity-80 transition-all duration-200'
          onClick={() => handleSend()}
        />
      </div>
    </div>
  )
}

export default CustomerService
