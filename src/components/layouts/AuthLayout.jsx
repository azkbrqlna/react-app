import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-6">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-slate-500 mt-5 text-sm text-center">
          {/* conditional rendering */}
          {/* ternanry digunakan jika ada dua conditional saja */}
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="text-blue-600 font-bold">
              Sign Up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 font-bold">
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
