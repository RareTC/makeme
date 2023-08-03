import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import './Chat.css';


const API_KEY = process.env.GPT_API


export default function MarkdownLink({ setMarkdown }) {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([{
    message: "What can I help you with?",
    sender: 'chatGPT',
  }]);
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);



  const handleSend = async (message) => {
    const newMessage = {
      message: message, 
      sender: "user",
      direction: "outgoing",
    }

    const newMessages = [...messages, newMessage];

    //update our messages state
    setMessages(newMessages)
    //Set typing indicator 
    setTyping(true);
    //process message to chatGPT(send it over to get a response)
    await processMessage(newMessages);
  }

  async function processMessage(chatMessages) {
    //chatMessages {sender: "user" or "chatGPT", message: "message content"}
    //apiMessages { role: "user" or "assistant", content: "message content"}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if(messageObject.sender === "ChatGPT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message }
    });

    const systemMessage = {
      role : "system",
      content: ""
    }

    const apiRequestBody = {
      "model" : "gpt-3.5-turbo",
      "messages" : [
        systemMessage,
        ...apiMessages,//[array of messages existing]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization" : "Bearer " + API_KEY,
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setMessages(
        [...chatMessages], {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }
      );
      setTyping(false);
    })

  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className='chat-icon'>
        <ChatIcon className='chat-icon' id='chat-icon'/>
      </button>
      {showModal && (
        <dialog ref={dialogRef} className='chatdialog'>
            <button onClick={() => setShowModal(false)} className='modalclose' id='chatclose'>X</button>

            <div style={{ position:"relative", height: "800px", width: "700px" }}>
              <MainContainer>
                <ChatContainer>
                  <MessageList
                  scrollBehavior='smooth'
                    typingIndicator={typing ? <TypingIndicator content = "MakeMe Bot Typing"/> : null }
                  >
                    {messages.map((message, i) => {
                      return <Message key={i} model={message} />
                    })}
                  </MessageList>
                  <MessageInput placeholder='Type Message Here' onSend={handleSend}/>
                </ChatContainer>
              </MainContainer>

            </div>

        </dialog>
      )}
    </>
  );
}