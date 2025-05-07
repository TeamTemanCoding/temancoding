const ChatBubble = ({ from, text }: { from: 'user' | 'bot'; text: string }) => {
    return (
        <div
            className={`max-w-[80%] px-3 py-2 rounded-lg whitespace-pre-wrap break-words ${from === 'user' ? 'bg-[#3C2FA0] self-end ml-auto' : 'bg-[#1D1B49] self-start'
                }`}
        >
            {text.includes('\n') ? (
                text.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))
            ) : (
                text
            )}
        </div>
    );
};

export default ChatBubble;