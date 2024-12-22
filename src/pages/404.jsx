import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold text-blue-600">Oops!</h1>
      <p className="text-xl font-semibold text-slate-500 my-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-lg text-slate-500">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
