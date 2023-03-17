import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Screens/Auth/Landing";
import Home from "./Screens/Home/Home";
import RequireAuth from "./Screens/Auth/RequireAuth";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import mixpanel from "mixpanel-browser";
import COLORS from "./Util/Colors";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";


mixpanel.init("69613a70022c0ba391674280f7940d93");
// mixpanel.track("An event", { debug: true });
const customTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.default.primary,
      contrastText: COLORS.default.contrastText,
    },
    secondary: {
      main: COLORS.default.secondary,
      contrastText: COLORS.default.contrastText,
    },
  },
});

export default function App() {
  return (
    <BrowserRouter
    
    >
      <ThemeProvider theme={customTheme}>
        <Routes >
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
          </Route>
         
        </Routes>
         
      </ThemeProvider>
    </BrowserRouter>
  );
}
