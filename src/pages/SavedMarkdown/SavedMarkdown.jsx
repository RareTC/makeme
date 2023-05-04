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

    function handleClick(markdownContent) {
        navigate('/markdown', { state: { markdownContent: markdownContent } });
    }

    return (
        <div>
            <h1>Saved Markdown</h1>
            <div>
                {savedMarkdowns.map((markdown) => (
                    <h2 key={markdown._id}>
                        <Link onClick={() => handleClick(markdown.content)}>
                            {markdown.title}
                        </Link>
                    </h2>
                ))}
            </div>
        </div>
    );
}


