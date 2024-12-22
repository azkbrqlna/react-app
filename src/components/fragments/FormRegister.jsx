import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="Input your fullname..."
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        label="Consfirm Password"
        type="password"
        name="consfirmPassword"
        placeholder="********"
      />
      <Button text="Register" classname="bg-blue-600 w-full"></Button>
    </form>
  );
};

export default FormRegister;
