import './InputField.css';

const InputField = ({ type, id, placeholder, value, onChange, error }) => {
  return (
    <div className="form-input">
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={'form-input' + (error ? 'error-field' : '')}
      />
      {error && <p className="validation-error">{error}</p>}
    </div>
  );
};

InputField.defaultProps = {
  type: 'text',
  placeholder: null,
  error: null,
};

export default InputField;
