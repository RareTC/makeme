import React from 'react';
import project from '../../assets/images/project.png'

export default function Template1({ setMarkdown, onCloseModal, setTitle, setSelectedMarkdown }) {

    const handleClick = () => {
        setMarkdown(
`
# Project Title 


![banner](https://i.imgur.com/eznl6CN.png)

[Click To Demo](https://github.com/RareTC)

[![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=black)](https://www.linkedin.com/in/trevor-campbell-a9188624a/)

[![Portfolio View](https://img.shields.io/badge/Portfolio-View-blue)](https://trev-portfolio.netlify.app/)


## :pencil: Description

Describe the Project Here in a few brief sentences. 

## :camera_flash: Screenshots 

Table Tips - draw the table with pipettes, and content goes inside.

|   Description | Screenshot | 
|:-------------:| -----------|
|Describe the Image|![Demo](https://i.imgur.com/Lz3QZda.jpg)|

## :computer: Technologies 

Add Tech Here! Badges/Shields look nice. 

![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)

## :book: Instructions

1. Instructions
1. Some More. 

## :eyes: Upcoming Features

Some Features you'd like to add. 

[:x:] Not Done Yet

[:white_check_mark:] Added!
`  
    );
    setTitle('');
    setSelectedMarkdown(false)
    onCloseModal();
      }    

  return (
    <button onClick={handleClick} className='templatebtn'> 
        <img className='templatephoto' src={project} alt="Project Template Example" />
    </button>
  )
}