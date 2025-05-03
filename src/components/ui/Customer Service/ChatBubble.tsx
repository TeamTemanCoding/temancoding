const ChatBubble = ({ from, text }: { from: 'user' | 'bot'; text: string }) => (
    <div className={`max-w-[80%] px-3 py-2 rounded-lg ${from === 'user' ? 'bg-[#3C2FA0] self-end ml-auto' : 'bg-[#1D1B49] self-start'
        }`}>
        {text}
    </div>
)

export default ChatBubble
