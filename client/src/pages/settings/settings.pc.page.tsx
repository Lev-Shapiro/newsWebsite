import { AdminPanelSettings, Public } from "@mui/icons-material";
import { Grid, styled } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import PrivateAccessComponent from "./private-access.component";
import PublicAccessComponent from "./public-access.component";
import SettingsHeaderComponent from "./settings-header.component";

function SettingsPcPage() {
    const AccessContainer = styled("div")({
        marginTop: "20px",
    });

    return (
        <Box>
            <Grid container item xs={12}>
                <Grid
                    item
                    xs={6}
                    sx={{
                        height: "100vh",
                        borderRight: 1,
                        borderColor: "divider",
                    }}
                >
                    <SettingsHeaderComponent
                        icon={<Public />}
                        text="Public Access"
                    />

                    <AccessContainer>
                        <PublicAccessComponent />
                    </AccessContainer>
                </Grid>
                <Grid item xs={6} sx={{ height: "100vh" }}>
                    <SettingsHeaderComponent
                        icon={<AdminPanelSettings />}
                        text="Private Access"
                    />

                    <AccessContainer>
                        <PrivateAccessComponent />
                    </AccessContainer>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SettingsPcPage;
