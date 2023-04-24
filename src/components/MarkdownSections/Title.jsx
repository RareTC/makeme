import React from 'react'

export default function Title({ value, onChange }) {
  return (
    <div>
      <label htmlFor="title"></label>
      <input type="text" id="title" value={value} onChange={onChange} />
    </div>
  );
}