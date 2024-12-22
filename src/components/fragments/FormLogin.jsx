import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button text="Login" classname="bg-blue-600 w-full"></Button>
    </form>
  );
};

export default FormLogin;
