import React from 'react';
import './Markdown.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkdownComponents from '../MarkdownComponentPage/MarkdownComponents';


export default function Markdown() {

  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');

  async function handleSave(evt) {
    evt.preventDefault();
    try {
      const text = markdown;
      const markdownTitle = title;
      console.log(text, markdownTitle)
    } catch(err) {
      console.log('Error Saving Markdown', err)
    }
    // saveMarkdown(title, text);
  };

  const Component = ({ node, inline, className, children, ...props }) => {
    const codeString = children[0] || '';
    const language = node.lang || null;
    return (
      <SyntaxHighlighter language={language} style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
  };


  return (
    <>
      <div className='savebtn'>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter project title'
        />
        <button onClick={handleSave}>Save</button>
      </div>
      <div className='textcontainer'>
        <div className='markdowncomponents'>
          <MarkdownComponents setMarkdown={setMarkdown} />
        </div>
        <textarea className='markdowntext'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        >
        </textarea>

        <div className='markdown'>
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} components={{
            code: Component,
            table: ({ children }) => (
              <table style={{ backgroundColor: "lightblue", border: "solid 1px" }}>
                {children}
              </table>
            ),
            td: ({ children }) => (
              <td style={{ padding: "5px", border: "solid 1px" }}>{children}</td>
            ),
            th: ({ children }) => (
              <th style={{ padding: "5px", border: "solid 1px" }}>{children}</th>
            )
          }} >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}



