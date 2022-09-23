import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import LoggedInPage from "./pages/logged-in.page";
import RegisterPage from "./pages/login/main.page";

function App() {
    const user = useAppSelector(state=>state.user.user);
    // const userExists = user.id != -1;

    const userExists = true;

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div id="App">{userExists ? <LoggedInPage /> : <RegisterPage />}</div>
        </ThemeProvider>
    );
}

export default App;
