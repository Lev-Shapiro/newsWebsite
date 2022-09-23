import { Typography } from "@mui/material"

function LogoTextComponent() {
    return (
        <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
        }}
    >
        HTalk
    </Typography>
    )
}

export default LogoTextComponent