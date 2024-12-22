import { Link } from "react-router-dom";
import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-slate-500 mt-5 text-sm text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
