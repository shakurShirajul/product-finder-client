import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border">
            <h1 className="text-2xl font-bold text-start">Create an Account</h1>
            <form noValidate="" action="" className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block dark:text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block dark:text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                Create Account
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Already have an Account?
              <span className="text-blue-700">
                <Link to="/login"> Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
