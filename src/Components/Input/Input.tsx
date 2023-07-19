import React, { ChangeEvent, memo, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type PropsType = Omit<TextFieldProps, "type" | "id" | "label"> & {
  type?: "text" | "number" | "email" | "password";
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const Input: React.FC<PropsType> = memo(
  ({ name, color, error, type, onChange, ...restProps }) => {
    // const upperName = name.charAt(0).toUpperCase() + name.slice(1);
    const [filled, setFilled] = useState(!!restProps.value);

    useEffect(() => setFilled(!!restProps.value), [restProps.value]);

    return (
      <TextField
        id="standard-basic"
        {...restProps}
        onChange={onChange}
        label="Standard"
        variant="standard"
      />
      // <WrapperInput color={color!} error={error} filled={filled}>
      // <input name={name} type={type} {...restProps} onChange={onChange} required={restProps.required}/>
      // <span>{error ? error : upperName}</span>
      // </WrapperInput>
    );
  }
);
