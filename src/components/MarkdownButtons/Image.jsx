import React, { useState, useEffect, useRef } from 'react';

export default function MarkdownLink({ setMarkdown }) {
  const [altText, setAltText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  const handleClick = () => {
    setMarkdown((markdown) => markdown + `\n![${altText}](${imageUrl})\n`);
    setAltText('');
    setImageUrl('');
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
      <button onClick={() => setShowModal(true)}>Image</button>
      {showModal && (
        <dialog ref={dialogRef}>
          <button onClick={() => setShowModal(false)} className='modalclose'>X</button>
          <form>
            <input
              className='modalinput'
              type="text"
              placeholder="Image Name"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
            />
            <input
              className='modalinput'
              type="text"
              placeholder="Add URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <button type="button" onClick={handleClick} className='modalbtn'>Add Link</button>
          </form>
        </dialog>
      )}
    </>
  );
}
