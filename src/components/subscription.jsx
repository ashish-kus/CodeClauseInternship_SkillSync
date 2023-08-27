import React from "react";
import "./styles/subscription.css"

const Subscription = () => {
  return (
    <>
      <div className="bg-[#fcefb4]  flex justify-center align-middle  py-32 ">
        <div className="newsletter  rounded-xl">
          <h1>
            Monthly
            <span>Newsletter</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, natus sequi maxime assumenda.</p>
          <div className="txtb">
            <input type="text" placeholder="Enter Your Email Address" />
            <button type="button"><i className="fas fa-arrow-right"></i></button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription;

