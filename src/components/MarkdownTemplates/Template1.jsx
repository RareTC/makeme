import React from 'react';
import instructions from '../../assets/images/instructions.png';

export default function Template1({ setMarkdown, onCloseModal, setTitle }) {

    const handleClick = () => {
        setMarkdown(
`# Template Title

## Contact
[![LinkedIn Badge](https://img.shields.io/badge/name-blue?style=flat&logo=Linkedin&logoColor=black)](https://www.linkedin.com/in/trevor-campbell-a9188624a/) 

[![Portfolio View](https://img.shields.io/badge/Portfolio-View-blue)](https://trev-portfolio.netlify.app/)

## Overview

Add a brief description of what this template is for and how it can be used.

## Usage

\`\`\`
Add instructions on how to use this template. 
Include any relevant code snippets, examples, or screenshots.
\`\`\`

## Pending Improvements
[:x:] This Feature

[:heavy_check_mark:] Added this one

## Contributing

Add guidelines for contributing to this template, including how to report issues and submit pull requests.

## License

Add information about the license that applies to this template.

`  
    );
    setTitle('');
    onCloseModal();
    }    

  return (
    <button onClick={handleClick} className='templatebtn'> 
      <img className='templatephoto'  src={instructions} alt="Instructions template screenshot" />
    </button>
  )
}