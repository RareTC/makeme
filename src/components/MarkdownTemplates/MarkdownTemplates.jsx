import React from 'react';
import { useEffect, useRef, useState  } from 'react';
import Template1 from './Template1.jsx';

export default function MarkdownTemplates({ setMarkdown }) {

  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);


  const handleOutsideClick = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <button className='dropmenu' onClick={() => setShowModal(true)}>Templates</button>

    {showModal && (
            <dialog ref={dialogRef}>
              <button onClick={() => setShowModal(false)} className='modalclose'>X</button>
                < Template1 setMarkdown={setMarkdown} onCloseModal={handleCloseModal}/>
            </dialog>
    )}

    </>
  )
}
