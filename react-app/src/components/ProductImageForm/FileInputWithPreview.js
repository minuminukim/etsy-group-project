const FileInputWithPreview = ({ index, src, onChange }) => {
  return (
    <div className={`grid-block grid-block-${index}`}>
      <label className="form-label">
        <input type="file" accept=".png,.jpg,.jpeg,.gif" onChange={onChange} />
        <p>Upload</p>
      </label>
      <img src={src || null} className="preview-image" alt="Preview image" />
    </div>
  );
};

export default FileInputWithPreview;
