import React from 'react'
import MarkdownTitle from '../../components/MarkdownButtons/MarkdownTitle';
import Bold from '../../components/MarkdownButtons/Bold';
import Italics from '../../components/MarkdownButtons/Italicize';

export default function MarkdownComponents({setMarkdown}) {

  return (
    <div>MarkdownComponents
        <MarkdownTitle setMarkdown={setMarkdown}/>
        <Bold setMarkdown={setMarkdown}/>
        <Italics setMarkdown={setMarkdown}/>
    </div>
  )
  }