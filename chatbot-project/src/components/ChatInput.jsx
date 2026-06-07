import { useState } from 'react'
import { Chatbot } from 'supersimpledev';

function ChatInput({chatMessages,setChatMessages}){

    const [inputText, setInputText] =  useState("");
    const [isLoading, setIsLoading] =  useState(false);

    function saveInputText(event){
        setInputText(
            event.target.value
        );
    }

    async function sendMessage(){
        
        if(inputText === "") return;
        if(isLoading) return;

        setIsLoading(true);
        const originalInputText = inputText;
        setInputText("");

        const tempId = crypto.randomUUID();

        const newChatMessages = [
            ...chatMessages,
            {
                message: originalInputText,
                sender: "user",
                id: crypto.randomUUID(),
                loadingStatus: false
            },
            {
                message: "Loading...",
                sender: "robot",
                id: tempId,
                loadingStatus: true
            }
        ]

        setChatMessages(newChatMessages);

        const response = await Chatbot.getResponseAsync(originalInputText)
        
        setChatMessages(prev=>[
            ...prev.filter(message => message.id !== tempId),
            {
                message: response,
                sender: "robot",
                loadingStatus: false,
                id: crypto.randomUUID()
            }
        ]);


        // const response = Chatbot.getResponse(inputText);
        // console.log(response);
        setIsLoading(false);
        
    }

    function enterAction(event){
        if(event.key === "Enter" && inputText !== ""){
            sendMessage();
        }
        else if (event.key === "Escape"){
            setInputText("");
        }
    }

    return (
        <div className="chat-input-container">
            <input 
                className="input-text"
                placeholder="Send a message to Chatbot" 
                size="50"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={enterAction}
            />
            <button 
                onClick={sendMessage} 
                disabled={isLoading}
                className="send-button"
            >
                {isLoading ? "Loading.." : "Send"}    
            </button>
            
        </div>
    )
}

export default ChatInput