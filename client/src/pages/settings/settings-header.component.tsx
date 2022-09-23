import { Grid, styled } from "@mui/material";
import * as React from "react";

interface ISettingsHeader {
    icon: JSX.Element;
    text: string;
}

function SettingsHeaderComponent({ icon, text }: ISettingsHeader) {
    const AccessHeader = styled(Grid)(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        color: theme.palette.text.disabled,
        textAlign: "center",
    }));

    return (
        <AccessHeader
            container
            item
            xs={12}
            justifyContent="center"
            columnSpacing={1}
        >
            <Grid item>
                {icon}
            </Grid>
            <Grid item>{text}</Grid>
        </AccessHeader>
    );
}

export default SettingsHeaderComponent;
