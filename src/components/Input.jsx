const Input = ({ type, label, name, value, onChange, placeHolder }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </label>
  );
};

export default Input;
