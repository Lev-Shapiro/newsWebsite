import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PrivateAccessComponent from "./private-access.component";
import PublicAccessComponent from "./public-access.component";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function SettingsMobilePage() {
    const [value, setValue] = React.useState(0);

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                >
                    <Tab label="Public Access" {...a11yProps(0)} />
                    <Tab label="Private Access" {...a11yProps(1)}/>
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <PublicAccessComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PrivateAccessComponent />
            </TabPanel>
        </Box>
    );
}

export default SettingsMobilePage;
