import React from "react";
import Button from "../Shared/Button";

const Tool = ({ tool }) => {
  const { name, image, description, price } = tool;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="tool_agriculture" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{tool.name}</h2>
        <p>{tool.description}</p>
        <p>Available Quantity: {tool.available_quantity}</p>
        <p>Minimum Order: {tool.minumum_order}</p>
        <p className="font-bold">Price: ${tool.price} per unit</p>
        <div className="card-actions">
          <Button>Purchase</Button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
