const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="w-full p-2 border border-gray-300 rounded-md text-sm text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
