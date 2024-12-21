import Input from "./Input";
import Label from "./Label";
const InputForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
