import { ChangeEvent, useState } from "react";

const Register = () => {
  const [signInForm, setSignInForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSignInForm = (event: ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prevSignData) => ({
      ...prevSignData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();
    // await login(signInForm);

    setSignInForm({
      userName: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="/admin" method="POST">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="userName"
                onChange={(event) => handleSignInForm(event)}
                autoComplete="userName"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signInForm.userName}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
            </div>

            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(event) => handleSignInForm(event)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signInForm.email}
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
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(event) => handleSignInForm(event)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={signInForm.password}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // disabled={!isDisabled}
              onClick={(event) => handleSubmit(event)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
