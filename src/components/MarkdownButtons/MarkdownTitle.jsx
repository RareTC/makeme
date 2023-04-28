import React from 'react'

export default function MarkdownTitle({ setMarkdown }) {

  const handleClick = () => {
    setMarkdown(markdown => markdown + `\n# Title (leave a space after the '#')\n`);
  }

  return (
    <button
    onClick={handleClick}
    >
      Add Title
    </button>
  )
}
