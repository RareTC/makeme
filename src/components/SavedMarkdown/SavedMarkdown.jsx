import React from 'react';
import { useEffect, useState } from 'react';
import * as MarkdownsAPI from '../../utilities/markdowns-api';
import Select from 'react-select';
import './SavedMarkdown.css'

export default function SavedMarkdown({ setMarkdown, newMarkdownSaved, setTitle, setSelectedMarkdown, setObjectId }) {

    const [savedMarkdowns, setSavedMarkdowns] = useState([]);

    useEffect(() => {
        async function fetchMarkdowns() {
            const markdowns = await MarkdownsAPI.getAllForUser();
            setSavedMarkdowns(markdowns);
        }
        fetchMarkdowns();
    }, [newMarkdownSaved]);

    const options = savedMarkdowns.map((markdown) => {
        // console.log(markdown._id, 'the select');
        return {
            id: markdown._id,
            value: markdown.markdown,
            label: markdown.title,
        };
    });

    const selectStyle = {
        control: (styles) => ({
          ...styles,
          backgroundColor: "#E5EDE6",
          width: '200px',
          fontSize: '20px',
        }),
        menu: (styles) => ({
          ...styles,
          backgroundColor: "#E5EDE6",
          color: '#2d3e45',
          fontSize: '20px',
        }),
      };
    
    async function handleSelect(evt) {
        // console.log(evt.id, 'the evt')
        setMarkdown(evt.value);
        setTitle(evt.label);
        setSelectedMarkdown(true);
        setObjectId(evt.id)
    }
    

    return (
        <div>
            <Select
                className='reactselect'
                classNamePrefix='reactselect'
                placeholder='View Saved'
                options={options}
                onChange={(evt) => handleSelect(evt)}
                styles={selectStyle}
            />
        </div>
    );
}
