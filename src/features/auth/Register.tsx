import { AuthWrapper } from "common/components/authWrapper";
import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterArgs } from "features/auth/auth.api";
import { matchPassword, passwordValidation, validateEmail } from "features/auth/validators";
import { Input } from "Components/Input/Input";
import TextField from "@mui/material/TextField";
import { styled } from "styled-components";

export type RegisterType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const dispatch = useAppDispatch();
  const { control, register, handleSubmit, formState } = useForm<RegisterType>({
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
  console.log(errors.email?.message);

  return (
    <AuthWrapper>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          name={"email"}
          register={register}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          validator={validateEmail}
        />
        <Input
          name={"password"}
          register={register}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
          validator={passwordValidation}
        />
        <Input
          name={"confirmPassword"}
          register={register}
          error={!!errors.confirmPassword?.message}
          helperText={errors.confirmPassword?.message}
          validator={matchPassword}
        />
        <div>
          <button>Send</button>
        </div>
      </Form>
    </AuthWrapper>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
