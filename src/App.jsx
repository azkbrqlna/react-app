import Button from "./components//fragments/Button";
import InputForm from "./components/elements/Input";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-6">
          Welcome, Please enter your details
        </p>
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
      </div>
    </div>
  );
}

export default App;
