import { useState, ChangeEvent, useContext } from "react";
import { login } from "../../services/authentication";
import { HeaderContext } from "./Header";

const SignIn = () => {
  const { setShowRegistration } = useContext(HeaderContext);

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const isDisabled = Boolean(signInForm.email && signInForm.password);

  const handleSignInForm = (event: ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prevSignData) => ({
      ...prevSignData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    await login(signInForm);

    setSignInForm({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(event) => handleSignInForm(event)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signInForm.email}
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(event) => handleSignInForm(event)}
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signInForm.password}
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={!isDisabled}
              onClick={(event) => handleSubmit(event)}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <button
            onClick={() => setShowRegistration(true)}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" " + "Sign up now"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
