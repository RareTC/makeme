import React from 'react';

export default function Bold({ setMarkdown }) {

  const handleClick = () => {
    setMarkdown((markdown) => markdown + `**bold text**`);
  };

  return <button onClick={handleClick}>Bold</button>;
}
