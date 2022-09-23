//TODO: Settings are divided into 2 parts ( public access, monitization )
//TODO: Make form for public access
//TODO: Connect that form to server so it could change initial data

import SettingsMobilePage from "./settings.mobile.page";
import SettingsPcPage from "./settings.pc.page";

function SettingsPage() {
    return window.innerWidth >= 600 ? <SettingsPcPage /> : <SettingsMobilePage />
}

export default SettingsPage;
