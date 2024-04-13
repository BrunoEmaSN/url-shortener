"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useBoundStore } from "@/app/store";
import useAuthValidate from "@/app/hooks/useAuthValidate";
import CardAuth from "@/app/ui/auth/cardAuth";
import TextField from "@/app/ui/dashboard/text-field";
import { ToastError } from "@/app/ui/toast";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useBoundStore((state) => state);
  const {
    name,
    email,
    password,
    confirmPassword,
    errors,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    validateFields
  } = useAuthValidate(true);

  const handleSubmit = async () => {
    if (validateFields()) {
      const newUser = {name, email, password};
      const result = await register(newUser);
      if (result) {
        router.push("/dashboard");
      }
    } else {
      ToastError("Please complete the fields");
    }
  };

  return (
    <CardAuth title="Register">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Name
        </label>
        <div className="mt-2">
          <TextField
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="h-6 text-red-800">{errors.name}</p>
        </div>
      </div>

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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="h-6 text-red-800">{errors.email}</p>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Password
        </label>

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
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Confirm Password
        </label>

        <div className="mt-2">
          <TextField
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="h-6 text-red-800">{errors.confirmPassword}</p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={Boolean(!name && !email && !password && !confirmPassword)}
          className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Sing up
        </button>
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        You have an account?{" "}
        <Link
          href="/auth/login"
          className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
        >
          Sing in
        </Link>
      </p>
    </CardAuth>
  );
}
