  // eslint-disable-next-line react/prop-types
  const Input = ({disabled, type, hint, id, value, handler, classes, readOnly}) => {
    return (
      <input
        type={type}
        className={`dark-glassmorphism  outline-none rounded-lg text-sm py-4 px-4 w-full transition-all duration-300 focus:border-1 focus:border-blue-400 ${classes}`}
        placeholder={hint}
        name={id}
        id={id}
        value={value}
        autoComplete="off"
        readOnly={readOnly}
        onChange={handler}
        disabled={disabled}
      />
    );
  };
  
  export default Input;
  