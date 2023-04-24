import './MarkdownMaker.css';
import {useState} from 'react';
import SectionHeader from '../../components/MarkdownSections/SectionHeader';
import SectionParagraph from '../../components/MarkdownSections/SectionParagraph';
import Title from '../../components/MarkdownSections/Title';


export default function MarkdownMaker() {

  const markdownMaker = () => {
    return [{ type: 'title', value: ''}];
  };
  
  const [fields, setFields] = useState(markdownMaker());
  const [selectedOption, setSelectedOption] = useState('');
  const [markdownText, setMarkdownText] = useState('');

  
  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleChange = (index, newValue) => {
    const newFields = [...fields];
    newFields[index].value = newValue;
    setFields(newFields);
    const newMarkdownText = newFields.map(field => field.value);
    setMarkdownText(newMarkdownText);
  };

  const handleAddField = () => {
    switch (selectedOption) {
      case 'title':
        setFields([...fields, { type: 'title', value: '' }]);
        break;
      case 'sectionHeader':
        setFields([...fields, { type: 'sectionHeader', value: '' }]);
        break;
      case 'sectionParagraph':
        setFields([...fields, { type: 'sectionParagraph', value: '' }]);
        break;
      default:
        break;
    }
    setSelectedOption('');
  };

  return (
    <div className='markdown-full'>
      <div className='maker'>Markdown Maker
          {fields.map((field, index) => {
            switch (field.type) {
              case 'title':
                return (
                  <Title
                    key={index}
                    value={field.value}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                );
              case 'sectionHeader':
                return (
                  <SectionHeader
                    key={index}
                    value={field.value}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                );
              case 'sectionParagraph':
                return (
                  <SectionParagraph
                    key={index}
                    value={field.value}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                );
              default:
                return null;
            }
          })}
          <div>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Select an option</option>
            <option value="title">Title</option>
            <option value="sectionHeader">Section Header</option>
            <option value="sectionParagraph">Section Paragraph</option>
          </select>
          <button onClick={handleAddField}>Add Field</button>
        </div>
          <button onClick={() => handleRemoveField(fields.length - 1)}>Remove Last Field</button>
      </div>
      <div className='render'>
        <h1>Markdown Render</h1>
        {markdownText}

      </div>
    </div>
  )
}
