import { Route, Routes } from "react-router-dom";
import NavbarComponent from "../navbar/navbar.component";
import HomePage from "./home/home.page";
import SettingsPage from "./settings/settings.page";
import WalletPage from "./wallet/wallet.responsive.page";

function LoggedInPage() {
    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="wallet" element={<WalletPage />} />
                <Route path="profile">
                    <Route path="settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default LoggedInPage;
