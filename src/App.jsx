import React from "react";

function App() {
  return (
    <div className="">
      {/* navbar  */}
      <div className="fixed z-50 top-0 px-5 md:px-32 w-full">
        <div className="  bg-white w-full mt-5 rounded-xl border-2 border-black px-5 flex items-center py-2 justify-between">
          <h1 className=" text-3xl hero">$YUBA</h1>
          <div className=" hidden md:flex items-center gap-5">
            <a href="">
              <p className=" heading">Home</p>
            </a>
            <a href="">
              <p className=" heading">About</p>
            </a>
            <a href="">
              <p className=" heading">How To Buy</p>
            </a>
          </div>
          <a href="https://letsbonk.fun/token/E87bPRZzXSQAX3JuwAnquj9GTQCvQUi2c4S6FDRbonk">
            <button className=" px-4 py-1 next bg-button rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(0,_0,_0,_0.35)]">
              BUY
            </button>
          </a>
        </div>
      </div>
      {/* navbar end */}
      {/* hero  */}
      <div className=" relative h-screen overflow-hidden bg-zinc-800">
        <div className=" absolute inset-0">
          <div className=" w-full h-full grid grid-cols-3">
            <div className=" w-full h-full">
              <video
                autoPlay
                muted
                loop
                src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753498249/u7122187825_Use_only_this_orange_cat_character_as_guidance._g_b283eb4d-fb51-40fc-9b95-defd2e1bf7dc_1_blcaaw.mp4"
                className=" w-full h-full object-cover rotate-6 scale-125"
              ></video>
            </div>
            <div className=" w-full h-full ">
              <video
                autoPlay
                muted
                loop
                src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753498228/u7122187825_Use_only_this_orange_cat_character_as_guidance._G_a1af6854-e9d6-4ec7-98c7-2c551c8d6bf6_0_mbgmgw.mp4"
                className=" w-full h-full object-cover rotate-6 scale-125  border-l-8 border-white"
              ></video>
            </div>
            <div className=" w-full h-full">
              <video
                autoPlay
                muted
                loop
                src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753498223/u7122187825_Use_only_this_orange_cat_character_as_guidance._1_aa1a509c-e55d-4641-877e-4f13d8593cfc_2_chtidf.mp4"
                className=" w-full h-full object-cover rotate-6 scale-125 border-l-8 border-white"
              ></video>
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}
      {/* about  */}
      <div className=" w-full px-5 md:px-32"></div>
      {/* about end */}
    </div>
  );
}

export default App;
