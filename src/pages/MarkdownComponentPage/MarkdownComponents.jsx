import React from 'react';
import './MarkdownComponents.css';
import MarkdownTitle from '../../components/MarkdownButtons/MarkdownTitle';
import Bold from '../../components/MarkdownButtons/Bold';
import Italics from '../../components/MarkdownButtons/Italicize';
import CodeBlock from '../../components/MarkdownButtons/CodeBlock';
import List from '../../components/MarkdownButtons/List';
import Table from '../../components/MarkdownButtons/Table';
import Badge from '../../components/MarkdownButtons/Badge';
import Strike from '../../components/MarkdownButtons/Strike';
import Link from '../../components/MarkdownButtons/Link';

export default function MarkdownComponents({setMarkdown}) {

  return (
    <div className='markdowncomponents'>MarkdownComponents
        <MarkdownTitle setMarkdown={setMarkdown}/>
        <Bold setMarkdown={setMarkdown}/>
        <Italics setMarkdown={setMarkdown}/>
        <CodeBlock setMarkdown={setMarkdown}/>
        <List setMarkdown={setMarkdown}/>
        <Table setMarkdown={setMarkdown} />
        <Badge setMarkdown={setMarkdown} />
        <Strike setMarkdown={setMarkdown} />
        <Link setMarkdown={setMarkdown} />

    </div>
  )
  }