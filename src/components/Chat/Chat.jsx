import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import './Chat.css';

export default function MarkdownLink({ setMarkdown }) {
  const [showModal, setShowModal] = useState(false);
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
        </dialog>
      )}
    </>
  );
}
