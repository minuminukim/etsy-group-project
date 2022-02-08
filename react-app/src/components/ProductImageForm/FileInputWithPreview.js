import { useRef } from 'react';
import { FaCamera } from 'react-icons/fa';
import './FileInputWithPreview.css';

const FileInputWithPreview = ({ index, src, onChange }) => {
  const hiddenInput = useRef(null);
  const handleClick = (e) => {
    hiddenInput.current.click();
  };

  const gridBlockStyle = {
    backgroundImage: `url(${src})`,
  };

  return (
    <div className={`grid-block grid-block-${index}`} style={gridBlockStyle}>
      <div className="icon-container" onClick={handleClick}>
        <div className="icon file-upload-icon">
          <FaCamera />
        </div>
        <p className="form-label">Add a photo</p>
      </div>
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.gif"
        onChange={onChange}
        className="file-input"
        ref={hiddenInput}
      />
    </div>
  );
};

export default FileInputWithPreview;
