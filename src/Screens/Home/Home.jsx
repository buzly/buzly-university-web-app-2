import React, { useState } from "react";
import SideDrawer from "../Components/SideDrawer";
import Profile from "./Profile";
import HomeFeed from "./HomeFeed";
import Analytics from "./Analytics";
import Students from "./Students";
import Community from "./Community";
import Help from "./Help";
import Forum from "./Forum";


function Home() {
  const [authType, setAuthType] = useState("login");
  const [currentTab, setCurrentTab] = useState("Home");
  const drawerSize = 240;
  let content;
  switch (currentTab) {
    case "Home":
      content = <HomeFeed/>;
      break;
    case "Students":
      content = <Students/>;
      break;
    case "Analytics":
      content = <Analytics/>;
      break;
    case "Profile":
      content = <Profile/>;
      break;
    case "Community":
      content = <Community/>;
      break;
    case "Help":
      content = <Help/>;
      break;
    case "Forum":
      content = <Forum/>;
      break;
    default:
      content = <HomeFeed/>;
      break;
  }
  return (
    <>

      <SideDrawer
        drawerSize={drawerSize}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div 
        style={{
          width: `calc(100% - ${drawerSize}px)`,
          marginLeft: `${drawerSize}px`,
          backgroundColor: "#f0f0f0",
        }}
        className="h-screen"
      >
        {content}
      </div>
    </>
  );
}

export default Home;
