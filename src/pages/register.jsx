import { Link } from "react-router-dom";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-slate-500 mt-5 text-sm text-center">
        have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
