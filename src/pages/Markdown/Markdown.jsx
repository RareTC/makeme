import React from 'react';
import './Markdown.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkdownComponents from '../MarkdownComponentPage/MarkdownComponents';


export default function Markdown() {

    const [markdown, setMarkdown] = useState('');

    const Component = ({node, inline, className, children, ...props}) => {
        const codeString = children[0] || '';
        const language = node.lang || null;
        return (
          <SyntaxHighlighter language={language} style={docco}>
            {codeString}
          </SyntaxHighlighter>
        );
      };
    
    
    return (
        <div className='textcontainer'>
            <div>
                <MarkdownComponents setMarkdown={setMarkdown}/>
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
    )
    
}



