import React from "react";
import arman from "../../images/arman.jpg";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div className="about">
      <img src={arman} alt="" />
      <h3>
        <b>Name:</b> Md. Arman Hossain
      </h3>
      <h2>
        <b>Email:</b> armanhossain2034@gmail.com
      </h2>
      <h2>
        <b>Education Qualification:</b> I've completed graduation on Physics at
        Govt. Bangla College under National University of Bangladesh.{" "}
      </h2>
      <h2>
        <b>Web Skills:</b>
        <ol>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
          <li>mongodb</li>
          <li>node.js</li>
          <li>React js</li>
        </ol>
      </h2>
      <h2>
        <b>Here three projects completed by me</b>
        <li>
          <a href="https://the-strength-coach.web.app">The Strength Coach</a>
        </li>
        <li>
          <a href="https://candid-pika-80b06b.netlify.app">Product analysis</a>
        </li>
        <li>
          <a href="https://the-strength-coach.web.app">
            Excercise management Website
          </a>
        </li>
      </h2>
    </div>
  );
};

export default MyPortfolio;
