import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { UserIdentifier } from "../../entity/user.entity";
import { setUser } from "../../features/user/user-slice";
import UserModel from "../../models/user.model";
import { FormInputText } from "./form/text.input";

const defaultValues = {
    email: "",
    password: "",
    global: "",
};

function LoginComponent({ userModel }: { userModel: UserModel }) {
    const dispatch = useAppDispatch();
    const { handleSubmit, setError, control } = useForm({ defaultValues });

    const onSubmit = async (data: UserIdentifier) => {
        const result = await userModel.login(data);

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
            setError("email", { type: "validate" });
            setError("password", { type: "validate" });
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
                    Log in
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <FormInputText
                        control={control}
                        name="email"
                        label="Email Address"
                        autoComplete="email"
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter something",
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
                                message: "Please enter something",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "Password should have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                            },
                        }}
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <Button
                        onClick={handleSubmit(onSubmit)}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log in
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

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default LoginComponent;
