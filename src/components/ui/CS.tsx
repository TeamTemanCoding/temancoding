import { Avatar, Input, Button } from '@heroui/react'
import { PaperPlaneRight } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { DATA_CS } from '~/data/datas'


const REPLIES = [
    {
        keywords: ["apa itu", "teman coding", "tentang teman coding"],
        response: DATA_CS.info,
        suggestions: [
            "Siapa foundernya?",
            "Kapan Teman Coding berdiri?",
            "Jasa apa yang tersedia?",
            "Bagaimana cara order jasa web?"
        ]
    },
    {
        keywords: ["founder", "pendiri"],
        response: `Foundernya adalah ${DATA_CS.founder}.`,
        suggestions: [
            "Siapa saja tim Teman Coding?",
            "Kapan Teman Coding didirikan?",
            "Apa itu Teman Coding?",
            "Bagaimana cara order jasa?"
        ]
    },
    {
        keywords: ["tim", "anggota", "team", "siapa saja"],
        response: DATA_CS.team,
        suggestions: [
            "Apa tugas masing-masing anggota?",
            "Kapan Teman Coding didirikan?",
            "Siapa foundernya?",
            "Bagaimana cara order jasa?"
        ]
    },
    {
        keywords: ["berdiri", "tahun", "kapan didirikan"],
        response: `Teman Coding berdiri sejak tahun ${DATA_CS.year}.`,
        suggestions: [
            "Apa itu Teman Coding?",
            "Siapa foundernya?",
            "Bagaimana cara order jasa?",
            "Siapa saja tim Teman Coding?"
        ]
    },

    {
        keywords: ["web", "website", "buat website"],
        response: DATA_CS.orderWeb,
        suggestions: [
            "Bagaimana cara order jasa desain?",
            "Apa saja metode pembayaran?",
            "Apakah bisa pakai DANA?",
            "Apa saja jasa yang tersedia?"
        ]
    },
    {
        keywords: ["design", "desain", "buat desain"],
        response: DATA_CS.orderDesign,
        suggestions: [
            "Bagaimana cara order jasa web?",
            "Apa saja metode pembayaran?",
            "Kami bisa bantu desain apa aja?",
            "Apakah bisa pakai DANA?"
        ]
    },
    {
        keywords: ["joki", "tugas", "bantu tugas"],
        response: DATA_CS.orderJoki,
        suggestions: [
            "Bagaimana cara order jasa web?",
            "Apa saja metode pembayaran?",
            "Kami bisa bantu desain apa aja?",
            "Apakah bisa pakai DANA?"
        ]
    },

    {
        keywords: ["bayar", "pembayaran", "payment", "dana", "qris"],
        response: DATA_CS.payments,
        suggestions: [
            "Bisa bayar lewat apa saja?",
            "Apakah bisa pakai DANA?",
            "Ada pembayaran via QRIS?",
            "Bagaimana cara order jasa web?"
        ]
    },

    {
        keywords: ["jasa", "layanan", "bantu", "apa yang tersedia"],
        response: DATA_CS.jasa,
        suggestions: [
            "Bagaimana cara order jasa web?",
            "Bagaimana cara order jasa desain?",
            "Metode pembayaran apa saja?",
            "Apakah bisa pakai DANA?"
        ]
    },
    {
        keywords: ["joki", "bantu"],
        response: DATA_CS.joki,
        suggestions: [
            "Bagaimana cara order jasa web?",
            "Bagaimana cara order jasa joki tugas?",
            "Metode pembayaran apa saja?",
            "Apakah bisa pakai DANA?"
        ]
    }
]


type ChatMessage = {
    from: 'user' | 'bot'
    text: string
}

const CS = ({ className }: { className?: string }) => {
    const [text, setText] = useState<string>("")
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [suggestions, setSuggestions] = useState<string[]>([])

    useEffect(() => {
        const greetingMessage: ChatMessage = { from: 'bot', text: "Halo! Aku Teman Coding Assistant. Ada yang bisa aku bantu?" }
        setMessages([greetingMessage])
        setSuggestions(["Apa itu Teman Coding?", "Siapa foundernya?", "Bagaimana cara order jasa?"])
    }, [])

    const handleSend = (message?: string) => {
        const userMessage = message || text.trim()
        if (!userMessage) return

        const userChat: ChatMessage = { from: 'user', text: userMessage }
        const updatedMessages = [...messages, userChat]
        setMessages(updatedMessages)
        setText("")
        setSuggestions([])

        setTimeout(() => {
            const { reply, suggestion } = getReplyAndSuggestions(userMessage)
            const botChat: ChatMessage = { from: 'bot', text: reply }
            setMessages([...updatedMessages, botChat])
            setSuggestions(suggestion)
        }, 500)
    }

    const getReplyAndSuggestions = (msg: string) => {
        const lowerMsg = msg.toLowerCase()

        for (const r of REPLIES) {
            if (r.keywords.some(k => lowerMsg.includes(k))) {
                return { reply: r.response, suggestion: r.suggestions }
            }
        }

        return {
            reply: "Tolong ajukan pertanyaan yang relevan seputar Teman Coding, ya!",
            suggestion: ["Apa itu Teman Coding?", "Siapa foundernya?", "Bagaimana cara order jasa?"]
        }
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
                        className={`max-w-[80%] px-3 py-2 rounded-lg ${msg.from === 'user' ? 'bg-[#3C2FA0] self-end ml-auto' : 'bg-[#1D1B49] self-start'
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
