import React from 'react';
import './MarkdownComponents.css';
import MarkdownTitle from '../../components/MarkdownButtons/MarkdownTitle';
import Bold from '../../components/MarkdownButtons/Bold';
import Italics from '../../components/MarkdownButtons/Italicize';

export default function MarkdownComponents({setMarkdown}) {

  return (
    <div className='markdowncomponents'>MarkdownComponents
        <MarkdownTitle setMarkdown={setMarkdown}/>
        <Bold setMarkdown={setMarkdown}/>
        <Italics setMarkdown={setMarkdown}/>
    </div>
  )
  }