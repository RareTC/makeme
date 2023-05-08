import React from 'react';
import { useEffect, useRef, useState  } from 'react';
import Template1 from './Template1.jsx';
import Template2 from './Template2.jsx';

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
    <button id='templates' onClick={() => setShowModal(true)}>Templates</button>

    {showModal && (
            <dialog ref={dialogRef} className='templatedialog'>
              <button onClick={() => setShowModal(false)} className='templateclose'>X</button>
                < Template1 setMarkdown={setMarkdown} onCloseModal={handleCloseModal}/>
                < Template2 setMarkdown={setMarkdown} onCloseModal={handleCloseModal}/>
            </dialog>
    )}

    </>
  )
}

