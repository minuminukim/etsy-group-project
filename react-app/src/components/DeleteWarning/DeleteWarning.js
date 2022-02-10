import Button from '../common/Button';
import './DeleteWarning.css';

const DeleteWarning = ({ cancelOnClick, deleteOnClick }) => {
  return (
    <div className="delete-warning">
      <h1 className="warning-heading">Are you sure?</h1>
      <h2 className="warning-caption">
        Do you really want to delete this listing? This process cannot be
        undone.
      </h2>
      <div className="warning-buttons">
        <Button label="Cancel" className="cancel-btn" onClick={cancelOnClick} />
        <Button label="Delete" className="delete-btn" onClick={deleteOnClick} />
      </div>
    </div>
  );
};

export default DeleteWarning;
