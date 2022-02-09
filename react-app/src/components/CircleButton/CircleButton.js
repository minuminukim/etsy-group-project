import { GrNext, GrPrevious } from 'react-icons/gr';
import './CircleButton.css';

const CircleButton = ({ className, size, iconType = null, onClick = null }) => {
  let icon;
  switch (iconType) {
    case 'next':
      icon = <GrNext />;
      break;
    case 'previous':
      icon = <GrPrevious />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <button
      className={`circle-btn circle-btn-${size} ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default CircleButton;
