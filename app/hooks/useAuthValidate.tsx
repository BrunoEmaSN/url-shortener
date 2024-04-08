import { useState } from "react";

export default function useAuthValidate(isRegister: boolean = false) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: '',
  });

  const validateFields = () => {
    let errors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ''
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

    if(isRegister) {
      if (!name) {
        errors.name = "Name is required.";
      } else if(name.length < 3) {
        errors.password = "Password must be at least 3 characters.";
      }

      if (!confirmPassword) {
        errors.confirmPassword = "Confirm Password is required.";
      } else if(confirmPassword !== password) {
        errors.confirmPassword = "Passwords do not match.";
      }
    }

    setErrors(errors);
    return !errors.email && !errors.password && !errors.name && !errors.confirmPassword;
  };

  return {
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
  }
}
