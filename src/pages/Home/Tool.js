import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Button";

const Tool = ({ tool }) => {
  const navigate = useNavigate();
  const {
    name,
    available_quantity,
    minumum_order,
    image,
    description,
    price,
    _id,
  } = tool;

  const navigateToPurchase = id => {
    navigate(`/tool/${id}`);
  };

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="tool_agriculture" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Available Quantity: {available_quantity}</p>
        <p>Minimum Order: {minumum_order}</p>
        <p className="font-bold">Price: ${price} per unit</p>
        <div className="card-actions">
          <button
            onClick={() => navigateToPurchase(_id)}
            className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
