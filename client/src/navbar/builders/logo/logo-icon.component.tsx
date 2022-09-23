import { Quickreply } from "@mui/icons-material";

function LoginIconComponent() {
    return (
        <Quickreply
            sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#84C1FF",
            }}
        />
    );
}

export default LoginIconComponent;
