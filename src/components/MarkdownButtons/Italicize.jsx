import React from 'react';

export default function Italic({ setMarkdown }) {

  const handleClick = () => {
    setMarkdown((markdown) => markdown + `_italic text_`);
  };

  return <button onClick={handleClick}>Italic</button>;
}
