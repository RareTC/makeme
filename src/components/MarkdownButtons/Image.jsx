import React, { useState } from 'react';

export default function MarkdownLink({ setMarkdown }) {
  const [altText, setAltText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setMarkdown((markdown) => markdown + `\n![${altText}](${imageUrl})\n`);
    setAltText('');
    setImageUrl('');
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Image</button>
      {showModal && (
          <dialog open>
            <button onClick={() => setShowModal(false)} className='modalclose'>X</button>
            <form>
              <input
                className='modalinput'
                type="text"
                placeholder="Link Name"
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