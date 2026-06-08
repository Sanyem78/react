import { useState, useEffect } from 'react'
import './App.css'
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import { Chatbot } from 'supersimpledev';

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
  const storedMessages = localStorage.getItem('messages');

    if (!storedMessages) {
        return [];
    }
    return JSON.parse(storedMessages);
   });

  useEffect(()=>{
    Chatbot.addResponses({
        "Movie Recommendation":"Avengers, The Oddesey and Incidious"
    });
  },[])

  useEffect(()=>{
    localStorage.setItem("messages",JSON.stringify(chatMessages))
  },[chatMessages]);

    return (
        <div className="app-container">  
            <ChatMessages 
                chatMessages={chatMessages}
            /> 
            <ChatInput 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App