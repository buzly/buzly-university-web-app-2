import React, { useState } from "react";

function Template() {
  const [authType, setAuthType] = useState("login");
  return (
    <>
      <div className="w-screen h-screen p-10 bg-indigo-100">
        <text>Template</text>
      </div>
    </>
  );
}

export default Template;
