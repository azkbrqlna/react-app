const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text = "...", classname = "bg-black" } = props;
  return (
    <button
      className={`${classname} hover:bg-blue-500 text-white p-2 rounded-md font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
