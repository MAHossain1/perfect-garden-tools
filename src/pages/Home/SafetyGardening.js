import React from "react";
import safety from "../../images/safety/raised-bed.png";

const SafetyGardening = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={safety}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="safety_img"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Top-14 Gardening Safety Tips htmlFor Everyone
          </h1>
          <p className="text-3xl py-5">Our amazing gardening safety guides</p>
          <p className="text-xl">
            Try to follow our amazing gardening safety guide and instruction
            which assist you in making a healthy garden with your healthy body.
          </p>
          <ul className="mb-5">
            <li>
              <b>Wear protective clothing:</b> When you are ready to go your
              garden to do any work or take care of your lovely plants, you must
              wear protective clothing to save you from any harm, sunburn, and
              injuries.
            </li>
            <li>
              <b>Take warm up:</b> Before starting your task you must warm up,
              and it will help you to dig and do your heavy-physical work more
              easily.
            </li>
            <li>
              <b>Use the tools safely:</b> Must use the right tools htmlFor the
              right job and keep them in the right place. Always try to keep
              them away from children. Some garden power tools are very sharp.
              You have to use them carefully. If you are using electric tools,
              watch where the cord is and unplug when not in use.
            </li>
            <li>
              <b>Take a short break:</b> When you are going to do heavy-task
              like digging, raking or a lot of trimming, you should take short
              breaks. You must do that work rotationally. As a result, you will
              not lose your energy and can finish them smoothly
            </li>
          </ul>
          <button className="btn btn-outline btn-primary">Read More...</button>
        </div>
      </div>
    </div>
  );
};

export default SafetyGardening;
