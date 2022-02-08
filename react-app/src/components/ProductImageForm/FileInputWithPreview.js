import { useRef } from 'react';
import { FaCamera } from 'react-icons/fa';
import './FileInputWithPreview.css';
import Button from '../common/Button';
import Badge from '../common/Badge';

const FileInputWithPreview = ({ index, src, onChange, error = null }) => {
  const hiddenInput = useRef(null);
  const handleClick = (e) => {
    hiddenInput.current.click();
  };

  const gridBlockStyle = {
    backgroundImage: `url(${src})`,
  };

  return (
    <div className={`grid-block grid-block-${index}`} style={gridBlockStyle}>
      {+index === 0 && (
        <Badge text="Primary" className="badge-black badge-small" />
      )}
      {!src && (
        <div className="icon-container" onClick={handleClick}>
          <div className="icon file-upload-icon">
            <FaCamera />
          </div>
          <p className="form-label">Add a photo</p>
        </div>
      )}
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.gif"
        onChange={onChange}
        className="file-input"
        ref={hiddenInput}
      />
      {error && <p className="validation-error">{error}</p>}
    </div>
  );
};

export default FileInputWithPreview;
