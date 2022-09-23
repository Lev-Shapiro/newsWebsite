import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, UseControllerProps } from "react-hook-form";

//* remove Control<any>
interface IFormField {
    autoFocus?: true;
    name: string;
    control: Control<any>;
    label: string;
    rules: UseControllerProps["rules"];
    autoComplete: string;
}

export const FormInputText = ({ name, control, label, rules, autoComplete, autoFocus }: IFormField) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    autoFocus={autoFocus || false}
                    margin="normal"
                    fullWidth
                    name={name}
                    autoComplete={autoComplete}
                    onChange={onChange}
                    value={value}
                    label={label}
                    error={!!error}
                    helperText={error?.message}
                />
            )}
        />
    );
};
