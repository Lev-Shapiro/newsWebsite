import { Divider, Grid } from "@mui/material";
import UserModel from "../../models/user.model";
import LoginComponent from "./login.component";
import SignupComponent from "./signup/signup.component";

function MainLoginPage() {
    const userModel = new UserModel();

    return (
        <Grid container item xs={12} height="100%">
            <Grid item xs={5.9}>
                <LoginComponent userModel={userModel} />
            </Grid>
            <Grid item xs={0.1}>
                <Divider orientation="vertical" />
            </Grid>
            <Grid item xs={5.9}>
                <SignupComponent />
            </Grid>
        </Grid>
    );
}

export default MainLoginPage;
