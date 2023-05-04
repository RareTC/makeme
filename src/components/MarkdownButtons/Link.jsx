import React, { useState } from 'react';

export default function MarkdownLink({ setMarkdown }) {
  const [label, setLabel] = useState('');
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setMarkdown((markdown) => markdown + `\n[${label}](${url})\n`);
    setLabel('');
    setUrl('');
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Link</button>
      {showModal && (
          <dialog open>
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
