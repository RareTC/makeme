import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as MarkdownsAPI from '../../utilities/markdowns-api';

export default function SavedMarkdown() {

    const [savedMarkdowns, setSavedMarkdowns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMarkdowns() {
            const markdowns = await MarkdownsAPI.getAllForUser();
            setSavedMarkdowns(markdowns);
        }
        fetchMarkdowns();
    }, []);

    return (
        <div>
            <h1>Saved Markdown</h1>
            <div>
                {savedMarkdowns.map((markdown) => (
                    <h2 key={markdown._id}>
                        <a onClick={() => navigate('/', { markdown }, console.log(markdown, 'on a tag'))}>
                            View {markdown.title}
                        </a>
                    </h2>
                ))}
            </div>
        </div>
    );
}


