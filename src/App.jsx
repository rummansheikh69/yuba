import { FaArrowTurnUp } from "react-icons/fa6";
import MemeMarquee from "./Marquee";

function App() {
  return (
    <div className="">
      {/* navbar  */}
      <div className="fixed z-50 top-0 px-5 md:px-32 w-full">
        <div className="  bg-white w-full mt-5 rounded-xl border-2 border-black px-5 flex items-center py-2 justify-between">
          <h1 className=" text-3xl hero">$YUBA</h1>
          <div className=" hidden md:flex items-center gap-5">
            <a href="/">
              <p className=" heading">Home</p>
            </a>
            <a href="#about">
              <p className=" heading">About</p>
            </a>
            <a href="#howtobuy">
              <p className=" heading">How To Buy</p>
            </a>
            <a href="#memes">
              <p className=" heading">Memes</p>
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
      <div
        id="about"
        className=" w-full px-5 md:px-32 min-h-screen pb-52 bg-button relative"
      >
        {/* cloud  */}
        <div className=" absolute w-full bottom-0 left-0 right-0">
          <img src="/cloud.png" alt="" />
        </div>
        {/* cloud end */}
        <div className=" flex items-center justify-center">
          <div className=" w-96 md:w-max gap-5 flex items-center mt-5 md:mt-10 py-2 px-5 bg-white justify-between rounded-full border-2 border-black">
            <h1 className=" heading truncate">
              EvHESBFUXtWXuE5snGYp6gPm9XtpdGqdoHYhJuGbonk
            </h1>
            <div className=" p-1 rounded-full bg-button border-2 border-black">
              <FaArrowTurnUp />
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-10 mt-10">
          <div className=" w-full md:w-1/2 px-0 md:px-10">
            <div className=" w-full h-96 rounded-xl border-4 border-black p-4 bg-[#0558ff]">
              <img
                className=" w-full h-full rounded-xl"
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753498212/image_4_mpqeuj.webp"
                alt=""
              />
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <h1 className="ex tracking-widest text-2xl">ABOUT US</h1>
            <h1 className=" text-5xl md:text-6xl ex text-white text-stroke">
              WHAT IS
            </h1>
            <h1 className=" text-5xl md:text-6xl ex text-white text-stroke">
              YUBA?
            </h1>
            <div className=" mt-5 w-full border-4 border-black rounded-xl p-5 bg-white">
              <h1 className=" text-2xl md:text-3xl hero">
                WHAT IS THE NARRATIVE OF $YUBA?
              </h1>

              <div className=" border-b border-black my-3" />

              <p className=" ex">
                YUBA began as a playful cat chasing leaves under a tree — but
                quickly wandered into magic, snacks, boats, and the far edge of
                the galaxy. By day, YUBA lounges on the street or skydives just
                for fun; by night, he casts spells, drifts through stars, and
                leaves traces of chaos across the Solana blockchain. He’s not
                just a meme — he’s a cosmic glitch wrapped in fur and dreams.
                Welcome to YUBA: the wandering spirit of Solana.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}

      {/* how to buy  */}
      <div
        id="howtobuy"
        className=" px-2 md:px-32 pb-20 relative pt-1 bg-[#cfe5ff]"
      >
        <div className=" absolute w-full -bottom-5 md:-bottom-14 left-0 right-0">
          <img src="/top-cloud.png" className=" " alt="" />
        </div>
        <h1 className=" text-center mt-5 text-4xl md:text-7xl hero text-white text-stroke">
          HOW TO BUY
        </h1>
        <div className=" mt-10 grid grid-cols-2 gap-1">
          <div className=" relative">
            <div className=" w-full md:w-72 px-5 h-72 md:h-80  bg-white border-2 border-black rounded-3xl">
              <div className=" w-full h-full relative flex flex-col justify-center items-center gap-5">
                <h1 className=" text-2xl next text-center">
                  1. Download Phantom wallet
                </h1>
                <h2 className=" text-center heading">
                  Download Phantom Wallet or any Solana wallet.
                </h2>
              </div>
            </div>
          </div>
          <div className=" relative md:mt-0 mt-5">
            <div className=" w-full md:w-72 px-5 h-72 md:h-80  bg-white border-2 border-black rounded-3xl">
              <div className=" w-full h-full relative flex flex-col justify-center items-center gap-5">
                <h1 className=" text-2xl next text-center">2. Get SOL</h1>
                <h2 className=" text-center heading">
                  If you don't have SOL yet, you can purchase from any CEX, and
                  send it to your SOL wallet.
                </h2>
              </div>
            </div>
          </div>
          <div className=" relative mt-5 md:mt-10">
            <div className=" md:float-end w-full md:w-72 px-5 h-72 md:h-80  bg-white border-2 border-black rounded-3xl">
              <div className=" w-full h-full relative flex flex-col justify-center items-center gap-5">
                <h1 className=" text-2xl next text-center">3. Go To Bonk</h1>
                <h2 className=" text-center heading">
                  After you get your SOL in your wallet, you can head to
                  Bonk.fun.
                </h2>
              </div>
            </div>
          </div>
          <div className=" relative mt-10 md:mt-10">
            <div className="md:float-end  w-full md:w-72 px-5 h-72 md:h-80  bg-white border-2 border-black rounded-3xl">
              <div className=" w-full h-full relative flex flex-col justify-center items-center gap-5">
                <h1 className=" text-2xl next text-center">4. Swap $YUBA</h1>
                <h2 className=" text-center heading">
                  Click and select $YUBA token or paste the Token Contract
                  Address into Bonk and swap SOL for $YUBA.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* how to buy end */}
      {/* memes  */}
      <div id="memes" className=" py-20 bg-[#40b1d6]">
        <h1 className=" text-center mt-5 text-4xl md:text-7xl hero text-white text-stroke">
          MEMES
        </h1>
        <MemeMarquee />

        <p className=" text-center hero text-3xl">
          {" "}
          © {new Date().getFullYear()} YUBA
        </p>
      </div>
      {/* memes end */}
    </div>
  );
}

export default App;
