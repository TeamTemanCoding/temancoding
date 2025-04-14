import { Avatar, Input, Button } from '@heroui/react'
import { PaperPlaneRight } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'

type ChatMessage = {
  from: 'user' | 'bot'
  text: string
}

const CS = ({ className }: { className?: string }) => {
  const [text, setText] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Pesan awal 
  useEffect(() => {
    const greeting = "Halo! Aku Teman Coding Assistant. Ada yang bisa aku bantu?"
    const greetingMessage: ChatMessage = { from: 'bot', text: greeting }
    setMessages([greetingMessage])
    setSuggestions([
      "Apa itu React?",
      "Gimana cara mulai belajar coding?",
      "Bisa bantu debugging?"
    ])
  }, [])

  // kirim pesan
  const handleSend = (message?: string) => {
    const userMessage = message || text.trim()
    if (!userMessage) return

    const userChat: ChatMessage = { from: 'user', text: userMessage }
    const updatedMessages = [...messages, userChat]
    setMessages(updatedMessages)
    setText("")
    setSuggestions([])

    // balasan bot
    setTimeout(() => {
      const botText = generateBotReply(userMessage)
      const botChat: ChatMessage = { from: 'bot', text: botText }
      setMessages([...updatedMessages, botChat])
      setSuggestions(getSuggestions(userMessage))
    }, 500)
  }

  // Jawaban bot 
  const generateBotReply = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()
    if (msg.includes("react")) {
      return "React adalah library JavaScript untuk membangun UI interaktif."
    } else if (msg.includes("debug")) {
      return "Tentu! Kirimkan error atau kode yang ingin kamu debug."
    } else if (msg.includes("belajar")) {
      return "Belajar coding bisa dimulai dari HTML, CSS, lalu JavaScript."
    }
    return `Menarik! Kamu bilang: "${userMessage}"`
  }

  // Saran 
  const getSuggestions = (userMessage: string): string[] => {
    const msg = userMessage.toLowerCase()
    if (msg.includes("react")) {
      return ["Apa beda React dan Next.js?", "Contoh komponen di React?", "Cara fetch data di React?"]
    } else if (msg.includes("debug")) {
      return ["Error: undefined is not a function", "Kenapa useState nggak update?", "Cara log error di console"]
    } else if (msg.includes("belajar")) {
      return ["Platform buat belajar coding gratis?", "Apa itu JavaScript?", "Tips belajar konsisten"]
    }
    return ["Gimana deploy project?", "Apa itu Tailwind CSS?", "Kasih tips ngoding cepat dong!"]
  }

  return (
    <div className={`h-[380px] sm:h-[450px] w-[280px] sm:w-[350px] bg-[#070627] shadow-md text-zinc-50 rounded-lg flex flex-col ${className}`}>
      <div className="!px-4 !py-2 h-14 bg-[#241D64] flex items-center gap-4 rounded-t-lg">
        <Avatar src="./images/logo-notitle.svg" alt="teman coding" className='bg-white w-7 h-7' isBordered color='success' />
        <div className='*:tracking-[0.7px]'>
          <h4 className='text-[13px] sm:text-[15px] font-bold'>Teman Coding Assistant</h4>
          <p className='text-[8px] sm:text-[10px] font-semibold text-white/65'>Interactive AI assistant for Teman Coding</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] px-3 py-2 rounded-lg ${
              msg.from === 'user'
                ? 'bg-[#3C2FA0] self-end ml-auto'
                : 'bg-[#1D1B49] self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {suggestions.length > 0 && (
          <div className="mt-3 space-y-2">
            <p className='text-[10px] text-white/60'>Coba pertanyaan ini:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((sug, idx) => (
                <Button
                  key={idx}
                  size="sm"
                  variant="flat"
                  className="text-xs text-white bg-[#2E2B8F] hover:bg-[#413DB8] px-3 py-1 rounded-lg"
                  onClick={() => handleSend(sug)}
                >
                  {sug}
                </Button>
              ))}
            </div>
          </div>
        )}
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

export default CS
