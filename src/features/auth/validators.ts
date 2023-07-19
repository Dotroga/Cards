import { RegisterType } from "features/auth/Register";

export const validateEmail = (value: string) => {
  if (!value) {
    return "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    return "Invalid email address";
  }
};
export const passwordValidation = (value: string) => {
  if (!value) {
    return "Password is required";
  } else if (value.length < 6) {
    return "Password must be at least 6 characters long";
  }
};
export const matchPassword = (value: string, values: RegisterType) => {
  if (values.confirmPassword !== values.password) {
    return "Passwords do not match";
  }
  return true;
};
