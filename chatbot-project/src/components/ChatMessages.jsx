import useAutoScroll from '../hooks/useAutoScroll.jsx';
import ChatMessage from '../components/ChatMessage.jsx';

function ChatMessages({chatMessages}){
    const chatMessagesRef = useAutoScroll([chatMessages]);

    return (
        <div className={chatMessages.length === 0 ? "default-message" : "chat-messages"} ref={chatMessagesRef}>
            {chatMessages.length === 0
                ? "Welcome to the chatbot project! Send a message using the textbox below"
                : chatMessages.map((chatMessage) => (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                        loadingStatus={chatMessage.loadingStatus}
                    />
                ))
            }
        </div>
    );
}

export default ChatMessages