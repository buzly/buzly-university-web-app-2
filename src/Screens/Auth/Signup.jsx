import React, { useState } from "react";
import PageTransition from "../Components/PageTransition";

function Signup() {
  const [authType, setAuthType] = useState("Signup");
  return (
    <PageTransition>
      <div className="w-screen h-screen p-10 bg-indigo-100">
        <text>Signup</text>
      </div>
    </PageTransition>
  );
}

export default Signup;
