import { AccountCircle, LogoutRounded, Settings } from "@mui/icons-material";
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/user/user-slice";
import getNavbarContext from "./get-navbar-context";

function ProfileMenuComponent() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { menuId, anchorEl, setAnchorEl, setMobileMoreAnchorEl } =
        getNavbarContext();

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);
    };

    const handleLogout = () => {
        navigate("/");
        dispatch(logout());
    };

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={!!anchorEl}
            onClose={handleMenuClose}
        >
            <List>
                <Link to="/profile/myaccount">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="My account" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/profile/settings">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Divider />

                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleLogout()}>
                        <ListItemIcon>
                            <LogoutRounded />
                        </ListItemIcon>
                        <ListItemText primary="Log out" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Menu>
    );
}

export default ProfileMenuComponent;
