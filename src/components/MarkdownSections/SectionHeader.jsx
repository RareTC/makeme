import React from 'react';

export default function SectionHeader(props) {
    const { value, onChange } = props;
    return (
      <div>
        <label htmlFor="sectionHeader"></label>
        <input type="text" id="sectionHeader" value={value} onChange={onChange} />
      </div>
    );
  }
  
  
