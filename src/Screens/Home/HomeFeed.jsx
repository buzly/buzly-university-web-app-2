import React, { useState } from "react";
import CreatePost from "../Components/CreatePost";
import GeneralPosts from "../Components/GeneralPosts";

function HomeFeed() {

  return (
    <>
      <div className="w-full h-full bg-indigo-100 overflow-y-scroll">
        <div className="flex flex-row p-10 overflow-x-auto">
          <CreatePost/>

        </div>
        <div className="flex flex-col">
          <text>Recent University Posts</text>
          <text>82 results</text>
          <GeneralPosts/>
        </div>
        
      </div>
    </>
  );
}

export default HomeFeed;
