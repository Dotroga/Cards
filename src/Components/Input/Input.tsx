import React from "react";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { UseFormRegister } from "react-hook-form";

type InputType = TextFieldProps & {
  register: UseFormRegister<any>;
  name: string;
  validator: any;
};
export const Input: React.FC<InputType> = ({ name, register, validator, ...restProps }) => {
  const upperName = name && name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <TextField
      {...register(name, { validate: validator })}
      {...restProps}
      label={upperName}
      variant="standard"
      InputProps={{
        style: { color: "white" }, // изменяет цвет текста
      }}
      InputLabelProps={{
        style: { color: "#808080" }, // изменяет цвет метки
      }}
      fullWidth
    />
  );
};
