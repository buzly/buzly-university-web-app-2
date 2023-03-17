import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  FiHome,
  FiUsers,
  FiHeart,
  FiUser,
  FiHelpCircle,
  FiCircle,
} from "react-icons/fi";
import COLORS from "../../Util/Colors";

function SideDrawer({ drawerSize, currentTab, setCurrentTab }) {
  const [open, setOpen] = React.useState(true);
  const drawerWidth = drawerSize;
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: COLORS.default.secondary,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider /> */}
        <DrawerHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="w-14 h-14 object-contain"
            src="https://buzly-dashboard.s3.us-east-2.amazonaws.com/assets/Artboard_6_6-_1_.png"
          />
        </DrawerHeader>
        <List>
          {[
            "Home",
            "Students",
            "Analytics",
            "Profile",
            "Community",
            "Help",
            "Forum",
          ].map((text, index) => {
            let icon;
            switch (text) {
              case "Home":
                icon = <FiHome />;
                break;
              case "Students":
                icon = <FiUsers />;
                break;
              case "Analytics":
                icon = <FiHeart />;
                break;
              case "Profile":
                icon = <FiUser />;
                break;
              case "Community":
                icon = <FiUsers />;
                break;
              case "Help":
                icon = <FiHelpCircle />;
                break;
              case "Forum":
                icon = <FiCircle />;
                break;
              default:
                icon = <MailIcon />;
                break;
            }
            return (
              <ListItem key={text} disablePadding style={{ padding: 10 }}>
                <ListItemButton onClick={() => {
                  console.log(text)
                  setCurrentTab(text)
                }}
                style={
                  currentTab === text
                    ? {
                        backgroundColor: COLORS.default.secondarySupport,
                        borderRadius: 10,
                        color: "#000",
                    }
                    : {
                        borderRadius: 10,

                    }
                }
                >
                  {/* <ListItemIcon>{icon}</ListItemIcon> */}
                  <ListItemIcon
                    style={{
                      color: COLORS.default.contrastText
                    }}
                  >{icon}</ListItemIcon>
                  <ListItemText primary={text}
                    style={{
                      color: COLORS.default.contrastText
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </>
  );
}

export default SideDrawer;
