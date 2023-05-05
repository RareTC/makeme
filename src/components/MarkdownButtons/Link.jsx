import React, { useState, useEffect, useRef } from 'react';

export default function MarkdownLink({ setMarkdown }) {
  const [label, setLabel] = useState('');
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  const handleClick = () => {
    setMarkdown((markdown) => markdown + `\n[${label}](${url})\n`);
    setLabel('');
    setUrl('');
    setShowModal(false);
  };

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

  return (
    <>
      <button onClick={() => setShowModal(true)}>Link</button>
      {showModal && (
          <dialog ref={dialogRef}>
            <button onClick={() => setShowModal(false)} className='modalclose'>X</button>
            <form>
              <input
                className='modalinput'
                type="text"
                placeholder="Link Name"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
              <input
                className='modalinput'
                type="text"
                placeholder="Add URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button type="button" onClick={handleClick} className='modalbtn'>Add Link</button>
            </form>
        </dialog>
      )}
    </>
  );
}
