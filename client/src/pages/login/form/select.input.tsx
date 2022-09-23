import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { Control, Controller, UseControllerProps } from "react-hook-form";

//* remove Control<any>
interface IFormField {
    name: string;
    control: Control<any>;
    label: string;
    rules: UseControllerProps["rules"];
    autoComplete: string;
    options: (string | number)[];
}

export const FormInputSelect = ({
    name,
    control,
    label,
    rules,
    options,
    autoComplete,
}: IFormField) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    name={name}
                    fullWidth
                    select
                    label={label}
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    helperText={error?.message}
                >
                    {options.map((val, i) => (
                        <MenuItem value={val} key={i}>
                            {val}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
};
