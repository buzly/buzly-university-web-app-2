import React, { useState } from "react";

function GeneralPost({post}) {

  return (
    <>
      <button className="bg-white w-72 h-72 hover:h-96 rounded-lg duration-300 overflow-y-hidden ease-in-out hover:scale-110 shadow-lg hover:shadow-xl transition-all font-Inter">
        <img
            src="https://buzly-dashboard.s3.us-east-2.amazonaws.com/Fully+Remote+(14+and+15)-1672853037731.png"
            className="w-full h-36 object-cover rounded-t-lg"
        />  
        <h1 className="text-lg font-bold mt-2 text-start p-2">
          {/* {post?.title} */}
          Health & Human Services
        </h1>
        <p
          className="w-full overflow-ellipsis text-start p-2"
        >
          {"Hi Hornets! Scholarships for the College of SSIS are open now! Apply through your Student Center > Financial Aid > Apply for Scholarships. Scholarships are due March 2nd, 2023. If you have any questions, please email Hi Hornets! Scholarships for the College of SSIS are open now! Apply through your Student Center > Financial Aid > Apply for Scholarships. Scholarships are due March 2nd, 2023. If you have any questions, please email Hi Hornets! Scholarships for the College of SSIS are open now! Apply through your Student Center > Financial Aid > Apply for Scholarships. Scholarships are due March 2nd, 2023. If you have any questions, please email "}
        </p>

      </button>
    </>
  );
}

export default GeneralPost;
