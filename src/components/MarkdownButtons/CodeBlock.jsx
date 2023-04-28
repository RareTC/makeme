import React from 'react';

export default function MarkdownCodeBlock({ setMarkdown }) {

  const handleClick = () => {
    setMarkdown((markdown) => markdown + `\n\`\`\`\nCode block\n\`\`\``);
  };

  return <button onClick={handleClick}>Code Block</button>;
}
