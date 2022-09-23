import { Box, Grid, styled, Typography, useTheme } from "@mui/material";
import PieChartMobileWrapper from "../wrapper/pie-chart.mobile.wrapper";

function WalletMobile() {
    const sectionBox = {
        backgroundColor: "",
        boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        borderRadius: "5px",
        marginBottom: "5%",
    };

    if (useTheme().palette.mode === "dark") {
        sectionBox.backgroundColor = "#202020";
    }
    const ColorBox = styled(Box)({
        width: "20px",
        height: "20px",
        borderRadius: "4px",
    });
    return (
        <Grid container item xs={12} sx={sectionBox}>
            <Grid container spacing={2} p={2}>
                <Grid item xs={6}>
                    <PieChartMobileWrapper
                        text="past month"
                        fill={[
                            [160, "#67E8B1"],
                            [30, "#FF605F"],
                        ]}
                    />
                </Grid>
                <Grid item xs={5}>
                    <PieChartMobileWrapper
                        text="current month"
                        fill={[
                            [80, "#67E8B1"],
                            [110, "#FF605F"],
                        ]}
                    />
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center">
                <ColorBox
                    sx={{
                        backgroundColor: "#67E8B1",
                    }}
                />
                <Typography marginLeft="1%">income</Typography>

                <ColorBox
                    sx={{
                        backgroundColor: "#FF605F",
                        marginLeft: "5%",
                    }}
                />
                <Typography marginLeft="1%">expense</Typography>
            </Grid>
        </Grid>
    );
}

export default WalletMobile;
