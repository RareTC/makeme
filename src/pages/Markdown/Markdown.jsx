import React from 'react';
import './Markdown.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';



export default function Markdown() {

    const [markdown, setMarkdown] = useState('');


    return (
        <div className='textcontainer'>
            <textarea className='markdowntext' 
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            > 
            </textarea>
            <div className='markdown'>
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )

}



