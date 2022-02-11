import { useState } from 'react';
import Trigger from './Trigger';
import './Accordion.css';

const Accordion = ({ label, content, list = false }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);
  const toList = (text) => {
    if (!list) return text;

    return (
      <ul>
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="accordion">
      <Trigger label={label} visible={visible} onClick={toggleVisible} />
      {visible && toList(content)}
    </div>
  );
};

export default Accordion;
