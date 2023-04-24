export default function SectionParagraph(props) {
    const { value, onChange } = props;
    return (
      <div>
        <label htmlFor="sectionParagraph"></label>
        <textarea
          id="sectionParagraph"
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    );
  }
  