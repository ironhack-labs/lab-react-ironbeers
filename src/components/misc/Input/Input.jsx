const Input = ({
  type = "text",
  value,
  onChange,
  id,
  name,
  placeholder,
  rows = 5,
  error,
  min,
  max,
  disabled = false,
}) => {
  const commonProps = {
    value,
    onChange,
    id,
    name,
    placeholder,
    className: `form-control ${error ? "is-invalid" : ""}`,
  };
  if (type === "textarea") {
    return <textarea rows={rows} disabled={disabled} {...commonProps} />;
  }
  return (
    <input
      className="rounded-pill"
      type={type}
      min={min}
      max={max}
      disabled={disabled}
      {...commonProps}
    />
  );
};

export default Input;
