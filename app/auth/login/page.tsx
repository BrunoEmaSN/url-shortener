"use client";
import { useRouter } from "next/navigation";
import { useBoundStore } from "@/app/store";
import useAuthValidate from "@/app/hooks/useAuthValidate";
import CardAuth from "@/app/ui/auth/cardAuth";
import TextField from "@/app/ui/dashboard/text-field";
import { ToastError } from "@/app/ui/toast";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useBoundStore((state) => state);
  const {
    email,
    password,
    errors,
    setEmail,
    setPassword,
    validateFields
  } = useAuthValidate(false);

  const handleSubmit = async () => {
    if (validateFields()) {
      const result = await login(email, password);
      if (result) {
        router.push("/dashboard");
      }
    } else {
      ToastError("Please complete the fields");
    }
  };

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
          <TextField
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="h-6 text-red-800">{errors.email}</p>
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
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="h-6 text-red-800">{errors.password}</p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={Boolean(!email && !password)}
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
