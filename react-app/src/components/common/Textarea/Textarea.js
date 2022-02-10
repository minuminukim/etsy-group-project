import './Textarea.css';

const Textarea = ({ id, placeholder, rows, value, onChange, error }) => {
  return (
    <div className="form-input">
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? 'error-field' : null}
        rows={rows}
      />
      {error && <p className="validation-error">{error}</p>}
    </div>
  );
};

Textarea.defaultProps = {
  label: null,
  placeholder: null,
  error: null,
  rows: '3',
};

export default Textarea;
