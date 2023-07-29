import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import './Chat.css';

export default function MarkdownLink({ setMarkdown }) {
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

//   useEffect(() => {
//     if (showModal) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     } else {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [showModal]);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='chat-icon'>
        <ChatIcon className='chat-icon' id='chat-icon'/>
      </button>
      {showModal && (
        <dialog ref={dialogRef} className='chatdialog'>
            <button onClick={() => setShowModal(false)} className='modalclose'>X</button>
            <section className='side-bar'>
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
            </section>

        </dialog>
      )}
    </>
  );
}
