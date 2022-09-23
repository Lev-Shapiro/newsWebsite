import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

//* remove Control<any>
interface IFormGlobalError {
    name: string;
    control: Control<any>;
    label: string;
    msg: string;
}

export const FormInputText = ({ name, control, label }: IFormGlobalError) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    margin="normal"
                    fullWidth
                    name={name}
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
