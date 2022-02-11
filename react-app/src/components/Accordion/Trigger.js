import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import './Trigger.css';

const Trigger = ({ label, visible = false, onClick }) => {
  return (
    <div className="trigger" onClick={onClick}>
      <h3 className="trigger-text">{label}</h3>
      {visible ? <AiOutlineUp /> : <AiOutlineDown />}
    </div>
  );
};

export default Trigger;
