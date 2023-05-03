import React from 'react';
import './Markdown.css';
import './Readme.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkdownComponents from '../MarkdownComponentPage/MarkdownComponents';
import * as markdownsAPI from '../../utilities/markdowns-api';


export default function Markdown() {

  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');

  async function handleSave(evt) {
    // console.log('attempting to save')
    try {
      const payload = {markdown, title} 
      // console.log(payload, 'first try')
      const savedMarkdown = await markdownsAPI.saveMarkdown(payload);
      // console.log(savedMarkdown, 'save button')
    } catch(err) {
      console.log('Error Saving Markdown', err)
    }
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
        <button onClick={() => handleSave()}>Save</button>

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
          }} >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}



