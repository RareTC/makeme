import React from 'react';
import './Markdown.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import MarkdownComponents from '../MarkdownComponentPage/MarkdownComponents';


export default function Markdown() {

    const [markdown, setMarkdown] = useState('');


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
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )

}



