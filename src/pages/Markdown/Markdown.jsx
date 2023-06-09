import React from 'react';
import './Markdown.css';
import 'github-markdown-css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkdownComponents from '../MarkdownComponentPage/MarkdownComponents';
import * as markdownsAPI from '../../utilities/markdowns-api';
import SavedMarkdown from '../../components/SavedMarkdown/SavedMarkdown';
import remarkGemoji from 'remark-gemoji';
import MarkdownTemplates from '../../components/MarkdownTemplates/MarkdownTemplates';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';


export default function Markdown() {

  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');
  const [newMarkdownSaved, setNewMarkdownSaved] = useState();
  const [selectedMarkdown, setSelectedMarkdown] = useState(false);
  const [objectId, setObjectId] = useState('')
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleSave(evt) {
    // console.log('attempting to save')
    if (title === '') {
      alert('Please add a title')
      return;
    }
    try {
      const payload = {markdown, title} 
      // console.log(payload, 'first try')
      await markdownsAPI.saveMarkdown(payload);
      // console.log(payload, 'save button')
      setNewMarkdownSaved(payload);
    } catch(err) {
      console.log('Error Saving Markdown', err)
    }
  };

  async function handleDelete(objectId) {
    try {
      await markdownsAPI.deleteMarkdown(objectId);
      const remainingMarkdown = await markdownsAPI.getAllForUser()
      setNewMarkdownSaved(remainingMarkdown);
      setTitle('');
      setMarkdown('');
    } catch (err) {
      console.log('err deleting on frontend', err);
    }
  }  

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
        <SavedMarkdown setMarkdown={setMarkdown} newMarkdownSaved={newMarkdownSaved}
         setTitle={setTitle} setSelectedMarkdown={setSelectedMarkdown} setObjectId={setObjectId}/>
        <MarkdownTemplates setMarkdown={setMarkdown} setTitle={setTitle} setSelectedMarkdown={setSelectedMarkdown}/>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter project title'
        />
        {
          selectedMarkdown ? (
            <>
              <button onClick={() => {
                // console.log(objectId);
                handleDelete(objectId);
              }}>Delete</button>

            <button onClick={() => handleSave()}>Save</button>
            </>
          ) : (
            <button onClick={() => handleSave()}>Save</button>
          )
        }
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
        <button className='copybtn' onClick={handleCopy}>
          { copied ?
          <AssignmentTurnedInIcon/>
          :
          <FileCopyIcon />
           }
        </button>
        <div className='markdown'>
          <ReactMarkdown className="markdown-body" children={markdown} remarkPlugins={[remarkGfm, remarkGemoji]} components={{
            code: Component,
          }} >
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}



