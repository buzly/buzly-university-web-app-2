import React, { useState } from "react";
import GeneralPost from "./GeneralPost";

function GeneralPosts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How to get a job in the tech industry",
      image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    },
    // {
    //   id: 2,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 3,
    //   title: "How to get a job in the tech industry!",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    //     {
    //   id: 1,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 2,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 3,
    //   title: "How to get a job in the tech industry!",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },    {
    //   id: 1,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 2,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 3,
    //   title: "How to get a job in the tech industry!",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },    {
    //   id: 1,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 2,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 3,
    //   title: "How to get a job in the tech industry!",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },    {
    //   id: 1,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 2,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 3,
    //   title: "How to get a job in the tech industry!",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },    {
    //   id: 1,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 2,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 3,
    //   title: "How to get a job in the tech industry!",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },    {
    //   id: 1,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 2,
    //   title: "How to get a job in the tech industry",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
    // {
    //   id: 3,
    //   title: "How to get a job in the tech industry!",
    //   image: "https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png",
    // },
  ]);

  return (
    <>
      <div className="flex flex-row p-10">
        {posts.map((post) => (
          <GeneralPost
            data={post}
          />
        ))}
      </div>
    </>
  );
}

export default GeneralPosts;
