import React from 'react';
import { useEffect, useState } from 'react';
import * as MarkdownsAPI from '../../utilities/markdowns-api';
import Select from 'react-select';

export default function SavedMarkdown({ setMarkdown, newMarkdownSaved }) {

    const [savedMarkdowns, setSavedMarkdowns] = useState([]);

    useEffect(() => {
        async function fetchMarkdowns() {
            const markdowns = await MarkdownsAPI.getAllForUser();
            setSavedMarkdowns(markdowns);
        }
        fetchMarkdowns();
    }, [newMarkdownSaved]);

    const options = savedMarkdowns.map((markdown) => {
        // console.log(markdown, 'the select');
        return {
          value: markdown.markdown,
          label: markdown.title,
        };
    });
    
    async function handleSelect(evt) {
        console.log(evt, 'the evt')
        setMarkdown(evt.value);
    }
    
    
    return (
        <div>
            <Select
            placeholder='View Saved Markdown'
             options={options}
              onChange={(evt) => handleSelect(evt)} />
        </div>
    );
}
