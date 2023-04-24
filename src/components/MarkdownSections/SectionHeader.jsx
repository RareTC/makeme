import React from 'react';

export default function SectionHeader(props) {
    const { value, onChange } = props;
    return (
      <div>
        <label htmlFor="sectionHeader">Section Header: </label>
        <input type="text" id="sectionHeader" value={value} onChange={onChange} />
      </div>
    );
  }
  
  
