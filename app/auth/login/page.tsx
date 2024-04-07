"use client";
import CardAuth from "@/app/ui/auth/cardAuth";
import TextField from "../../ui/dashboard/text-field";
import { useBoundStore } from "@/app/store";
import { useState } from "react";
import { ToastError } from "@/app/ui/toast";

export default function LoginPage() {
  const { login } = useBoundStore((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateFields = () => {
    let errors = {
      email: "",
      password: "",
    };

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 4) {
      errors.password = "Password must be at least 6 characters.";
    } else if(password.length > 12) {
      errors.password = "Password must be up to 12 characters.";
    }

    setErrors(errors);
    return !errors.email && !errors.password;
  };

  const handleSubmit = () => {
    if(validateFields()) {
      login(email, password)
    } else {
      ToastError('Please complete the fields');
    }
  }

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
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="h-6 text-red-800">{errors.password}</p>
        </div>
      </div>

      <div>
        <button
          onClick={handleSubmit}
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
