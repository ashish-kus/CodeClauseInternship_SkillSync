import React from "react";

const Video = () => {
  return (
    <>
      <div className="py-32 bg-[#ffd60a]">
        <div className=" bg-gray-50 shadow-2xl border max-w-6xl m-auto p-16 h-fit  rounded-xl">
          <h2 className="text-4xl pb-4 font-extrabold">Introduction</h2>
          <p className="font-bold text-md pb-4 text-gray-400">
            We're your bridge from learning to doing. Unleash your skills, achieve goals, and
            make an impact. Discover how SkillSync empowers you. Watch the video now.
          </p>
          <video className="m-auto p-4  w-full" src="https://www.youtube.com/watch?v=RLzC55ai0eo&list=RD1gukvtH_a3I&index=2"
            width="750"
            height="500"
            controls>
          </video>
          <div className="flex justify-between mt-4">
            <button type="button" className="border-2 border-gray-900 w-full p-2 mr-1 rounded-xl"> Know more </button>
            <button type="button" className="border-2  bg-black text-white w-full p-2 ml-1 rounded-xl"> Know more </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video;
