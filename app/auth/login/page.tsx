import CardAuth from "@/app/ui/auth/cardAuth";
import TextField from "../../ui/dashboard/text-field";

export default function LoginPage() {
  return (
    <CardAuth title="Login">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          E-mail
        </label>
        <div className="mt-2">
          <TextField id="email" type="text" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-600"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-cyan-600 hover:text-cyan-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <TextField id="password" type="text" />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Login
        </button>
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{" "}
        <a
          href="#"
          className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
        >
          Sing up
        </a>
      </p>
    </CardAuth>
  );
}
