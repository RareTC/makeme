import React from 'react';

export default function Table({ setMarkdown }) {
  const handleClick = () => {
    setMarkdown(markdown => markdown + `\n| Column 1 | Column 2 |\n| ------ | ------ |\n| Row 1 | Row 1 |\n| Row 2 | Row 2 |\n`);
  };

  return (
    <button className="markdown-btn" onClick={handleClick}>
      Table
    </button>
  );
}
