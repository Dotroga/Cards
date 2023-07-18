import { AuthWrapper } from "common/components/authWrapper";
import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterArgs } from "features/auth/auth.api";

export const Auth = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<RegisterArgs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submit: SubmitHandler<RegisterArgs> = (data) => {
    dispatch(authThunks.register(data));
  };
  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("email")} />
        <input type="text" {...register("password")} />
        <button>Send</button>
      </form>
    </AuthWrapper>
  );
};
