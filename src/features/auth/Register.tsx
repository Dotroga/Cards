import { AuthWrapper } from "common/components/authWrapper";
import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterArgs } from "features/auth/auth.api";
import { matchPassword, passwordValidation, validateEmail } from "features/auth/validators";
import { Input } from "Components/Input/Input";

export type RegisterType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState } = useForm<RegisterType>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors } = formState;

  const submit: SubmitHandler<RegisterArgs> = (data) => {
    dispatch(authThunks.register(data));
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(submit)}>
        <Input />
        <input {...register("email", { validate: validateEmail })} />
        <div>{errors.email?.message}</div>
        <input {...register("password", { validate: passwordValidation })} />
        <div>{errors.password?.message}</div>
        <input {...register("confirmPassword", { validate: matchPassword })} />
        <div>{errors.confirmPassword?.message}</div>
        <button>Send</button>
      </form>
    </AuthWrapper>
  );
};
