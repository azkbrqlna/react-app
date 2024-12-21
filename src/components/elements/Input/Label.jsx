const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 font-semibold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
