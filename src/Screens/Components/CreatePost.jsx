import React, { useState } from "react";
import { AddCircle } from "iconsax-react";
import COLORS from "../../Util/Colors";

function CreatePost() {
  return (
    <button className="px-20 py-10 bg-white rounded-md shadow-md flex flex-col items-center justify-center hover:shadow-lg ease-in-out duration-300 hover:scale-110">
      <AddCircle size={74} color={COLORS.default.primary} variant="Bulk"/>
        <text className="font-semibold">New Post</text>
    </button>
  );
}

export default CreatePost;
