import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import PageTransition from "../Components/PageTransition";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const Interactive = () => {
  const navigate = useNavigate();
  const goToLogin = async () => {
    navigate("/login");
  }
  return (
    <div className="w-1/2 h-full px-28">

      <div className="font-Inter flex flex-col">
        <text
        className="text-7xl font-medium leading-[1.3] text-neutral-800 dark:text-white">
        Experience personalized student engagement with Buzly</text>
        <text className="text-2xl font-light my-10 text-neutral-500 dark:text-neutral-400">
          Want to know how it works? Sign up below for a one on one demo.
        </text>
      </div>

      <div className="flex flex-row justify-between">
        <LoadingButton variant="contained" size="large" style={{paddingLeft: 50, paddingRight: 50, paddingTop:15, paddingBottom: 15}}
        onClick={goToLogin}
        >Login</LoadingButton>
        <LoadingButton variant="outlined" size="large" style={{paddingLeft: 50, paddingRight: 50, paddingTop:15, paddingBottom: 15}}>Sign Up</LoadingButton>
      </div>
    </div>
  );
};

const Media = () => {
  return (
        <img
            src="https://buzly-dashboard.s3.us-east-2.amazonaws.com/assets/landing.png"
            className="object-cover w-1/2 h-full px-28"
        />

  )
};

function Landing() {
  const [authType, setAuthType] = useState("login");
  return (
    <>
        {/* <AppBar
            position="static"
        >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Buzly
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar> */}
        <PageTransition>
          <div className="flex flex-row justify-between w-screen h-screen p-10 pt-20 bg-white dark:bg-neutral-800">
            <Interactive />

            <Media />
          </div>
        </PageTransition>

    </>
  );
}

export default Landing;
