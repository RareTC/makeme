import React from 'react';

export default function MarkdownStrikethrough({ setMarkdown }) {
  const handleClick = () => {
    setMarkdown((markdown) => markdown + '\n~~strikethrough text~~\n');
  };

  return <button onClick={handleClick}>Strike Through</button>;
}
