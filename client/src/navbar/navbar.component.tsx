import { Search } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";
import LogoComponent from "./builders/logo/logo.component";
import MobileMenuComponent from "./builders/mobile-menu.component";
import { NavbarContext } from "./builders/Navbar.context";
import ProfileMenuComponent from "./builders/profile-menu.component";

export default function NavbarComponent() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";

    return (
        <NavbarContext.Provider
            value={{
                menuId,
                mobileMenuId,
                anchorEl,
                setAnchorEl,
                mobileMoreAnchorEl,
                setMobileMoreAnchorEl,
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <LogoComponent />
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Link to="/">
                                <IconButton
                                    size="large"
                                    aria-label="search for posts"
                                    color="inherit"
                                >
                                    <Search />
                                </IconButton>
                            </Link>
                            <Link to="/notifications">
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            </Link>

                            <Link to="/wallet">
                                <IconButton
                                    size="large"
                                    aria-label="show 10 new monitizations"
                                    color="inherit"
                                >
                                    <Badge badgeContent={10} color="error">
                                        <AttachMoneyIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={(event) =>
                                    setAnchorEl(event.currentTarget)
                                }
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={(event) =>
                                    setMobileMoreAnchorEl(event.currentTarget)
                                }
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <MobileMenuComponent />
                <ProfileMenuComponent />
            </Box>
        </NavbarContext.Provider>
    );
}
