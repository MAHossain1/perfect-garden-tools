import React from "react";
import { CashIcon, UserGroupIcon, ThumbUpIcon } from "@heroicons/react/solid";

const Summary = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-primary text-3xl font-bold">
          Helping Millions Grow Better
        </h1>
        <h3 className="text-xl">The Numbers Shown Their Trust</h3>
      </div>
      <div className=" mt-20 ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <h1>
            <UserGroupIcon className="h-20 w-20 text-primary"></UserGroupIcon>
          </h1>
          <h2 className="text-6xl mt-5">500 +</h2>
          <h1 className="text-green-500">Happy Clients</h1>
        </div>
        <div>
          <h1>
            <CashIcon className="h-20 w-20 text-primary"></CashIcon>
          </h1>
          <h2 className="text-6xl mt-5">50M+</h2>
          <h1 className="text-green-500">Annual Revenue</h1>
        </div>
        <div>
          <h1>
            <ThumbUpIcon className="h-20 w-20 text-primary"></ThumbUpIcon>
          </h1>
          <h2 className="text-6xl mt-5">59K</h2>
          <h1 className="text-green-500">5 star Review</h1>
        </div>
      </div>
    </div>
  );
};

export default Summary;
