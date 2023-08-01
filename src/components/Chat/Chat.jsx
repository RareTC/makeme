import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
// import AddIcon from '@mui/icons-material/Add';
// import SendIcon from '@mui/icons-material/Send';
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

export default function MarkdownLink({ setMarkdown }) {
  const [messages, setMessages] = useState([{
    message: "hello, I am chatgpt",
    sender: 'chatGPT'
  }]);
  const [showModal, setShowModal] = useState(true);
  const dialogRef = useRef(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  const handleSend = async (message) => {
    
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className='chat-icon'>
        <ChatIcon className='chat-icon' id='chat-icon'/>
      </button>
      {showModal && (
        <dialog ref={dialogRef} className='chatdialog'>
            <button onClick={() => setShowModal(false)} className='modalclose'>X</button>

            <div style={{ position:"relative", height: "800px", width: "700px" }}>
              <MainContainer>
                <ChatContainer>
                  <MessageList>
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

{/* <section className='side-bar'>
  <button className='chat-button'>
    <AddIcon sx={{mb:-0.8}}/> New Chat </button>
  <ul className='history'>
    <li>bleh</li>
  </ul>
  <nav className='chat-nav'>
    <p>Made by USER-NAME</p>
  </nav>
</section>
<section className='main'>
  <h1>Creativity Chat</h1>
    <ul className='feed'>

    </ul>
    <div className="bottom-section">
      <div className='input-container'>
        <input className='chat-input' />
        <div id='submit'>
          <SendIcon sx={{ mb: -1 }} />
        </div>
      </div>
    <p className='info'>
      Utilizing Chat-GPT's Language AI, interact to create content. 
    </p>
    </div>
</section> */}