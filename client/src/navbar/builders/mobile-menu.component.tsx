import AccountCircle from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { Link } from "react-router-dom";
import getNavbarContext from "./get-navbar-context";

function MobileMenuComponent() {
    const { menuId, mobileMenuId, mobileMoreAnchorEl, setMobileMoreAnchorEl, setAnchorEl } =
        getNavbarContext();

    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={!!mobileMoreAnchorEl}
            onClose={() => setMobileMoreAnchorEl(null)}
        >
            <Link to="/notifications">
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
            </Link>

            <Link to="/wallet">
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 4 new mails"
                        color="inherit"
                    >
                        <Badge badgeContent={4} color="error">
                            <AttachMoneyIcon />
                        </Badge>
                    </IconButton>
                    <p>Wallet</p>
                </MenuItem>
            </Link>
            <MenuItem
                onClick={(event) => setAnchorEl(event.currentTarget)}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
}

export default MobileMenuComponent;
