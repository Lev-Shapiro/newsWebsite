import { createContext } from "react";

interface INavbarContext {
    menuId: string;
    mobileMenuId: string;
    anchorEl: null | HTMLElement;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    mobileMoreAnchorEl: null | HTMLElement;
    setMobileMoreAnchorEl: React.Dispatch<
        React.SetStateAction<HTMLElement | null>
    >;
}

export const NavbarContext = createContext<INavbarContext | undefined>(
    undefined
);
