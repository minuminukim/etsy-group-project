import { GrNext, GrPrevious } from 'react-icons/gr';
import './ButtonWithIcon.css';

const buttonReducer = (action) => {
  switch (action) {
    case 'next':
      return <GrNext />;
    case 'previous':
      return <GrPrevious />;
    default:
      return null;
  }
};

const ButtonWithIcon = ({ className, size, action, shape, onClick = null }) => {
  const icon = buttonReducer(action);

  return (
    <button
      className={`${shape}-btn ${shape}-btn-${size} ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default ButtonWithIcon;
