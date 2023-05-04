import React from 'react';

export default function MarkdownBadge({ setMarkdown }) {
  const handleClick = () => {
    setMarkdown(
      (markdown) =>
        markdown +
        '\n' +
        '[![My Badge](https://img.shields.io/badge/CHANGETHIS-ANDTHIS-blue)](https://example.com)\n\n'
    );
  };

  return <button onClick={handleClick}>Badge</button>;
}
