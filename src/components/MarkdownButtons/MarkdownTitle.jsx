import React from 'react'

export default function MarkdownTitle({ setMarkdown }) {

  const handleClick = () => {
    setMarkdown(markdown => markdown + `\n# Add Title\n`);
  }

  return (
    <button
    onClick={handleClick}
    >
      Add Title
    </button>
  )
}
