import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormHelperText, Grid, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../app/hooks";
import { months } from "../../../entity/months.entity";
import { setUser } from "../../../features/user/user-slice";
import UserModel from "../../../models/user.model";
import { FormInputSelect } from "../form/select.input";
import { FormInputText } from "../form/text.input";

const defaultValues = {
    name: "",
    email: "",
    password: "",
    global: "",
    day: "1",
    month: months[0],
    year: new Date().getFullYear().toString(),
};

function SignupComponent() {
    const dispatch = useAppDispatch();
    const { handleSubmit, setError, control } = useForm({ defaultValues });
    const userModel = new UserModel();

    const onSubmit = async (data: typeof defaultValues) => {
        const { global, ...dataToSend } = data;
        const result = await userModel.signup(dataToSend);

        if (result.errors) {
            const errorsResult = Object.entries(result.errors) as [
                keyof typeof defaultValues,
                string
            ][];

            for (var i = 0; i < errorsResult.length; i++) {
                const [errName, errMsg] = errorsResult[i];
                setError(errName, {
                    type: "custom",
                    message: errMsg,
                });
            }

            return;
        }

        if (!result.user) {
            setError("global", {
                type: "custom",
                message: "fields arent correct",
            });

            return;
        }

        dispatch(setUser(result.user));
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <FormInputText
                        control={control}
                        name="name"
                        label="Name"
                        autoComplete="name"
                        autoFocus
                        rules={{
                            required: {
                                value: true,
                                message: "Name is required",
                            },
                            pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: "name is not valid",
                            },
                        }}
                    />

                    <FormInputText
                        control={control}
                        name="email"
                        label="Email Address"
                        autoComplete="email"
                        rules={{
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message:
                                    "Email address is not valid. Example of valid email: example@gmail.com",
                            },
                        }}
                    />

                    <FormInputText
                        control={control}
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                        rules={{
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "Password should have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                            },
                        }}
                    />

                    <Grid container item xs={12} spacing={2} mt={2}>
                        <Grid item xs={4}>
                            <Controller
                                name="day"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "not selected",
                                    },
                                    pattern: {
                                        value: /\b([1-9]|1[0-9]|2[0-9]|3[0-1])\b/,
                                        message: "not valid",
                                    },
                                }}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                        name="day"
                                        label="Day"
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error?.message}
                                        value={value}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInputSelect
                                control={control}
                                name="month"
                                label="Month"
                                autoComplete="date-month"
                                options={months}
                                rules={{}}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="year"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "not selected",
                                    },
                                    pattern: {
                                        value: /^(19|20)\d{2}$/,
                                        message: "not valid",
                                    },
                                    max: {
                                        value: new Date().getFullYear() - 13,
                                        message: "age should be at least 13+",
                                    },
                                }}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                        name="year"
                                        label="Year"
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error?.message}
                                        value={value}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        onClick={handleSubmit(onSubmit)}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign up
                    </Button>

                    <Controller
                        name="global"
                        control={control}
                        render={({ fieldState: { error } }) => (
                            <FormHelperText error={!!error}>
                                {error?.message || ""}
                            </FormHelperText>
                        )}
                    ></Controller>
                </Box>
            </Box>
        </Container>
    );
}

export default SignupComponent;
