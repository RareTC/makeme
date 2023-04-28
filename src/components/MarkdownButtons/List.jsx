import React from 'react';

export default function MarkdownList({ setMarkdown }) {
  const handleClick = () => {
    setMarkdown(markdown => markdown + '\n - List item\n');
  };

  return (
    <button onClick={handleClick}>
      List
    </button>
  );
}
