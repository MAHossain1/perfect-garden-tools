import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToolDetail from "../hooks/useToolDetail";

const Purchase = () => {
  const { toolId } = useParams();
  const [tool] = useToolDetail(toolId);
  const [user] = useAuthState(auth);
  const [quantity, setQuantity] = useState(100);
  const [error, setError] = useState("");

  const handlePurchasing = event => {
    event.preventDefault();

    const purchasing = {
      toolId: tool._id,
      tool: tool.name,
      price: tool.price,
      quantity: quantity,
      customerName: user.displayName,
      customer: user.email,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/purchasing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchasing),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          toast(`${quantity} of this ${tool.name} is purchased by you!`);
        }
      });
  };

  const handleDecrement = () => {
    if (quantity > 100) {
      setQuantity(quantity - 1);
      setError(
        <p className="text-primary">Thank you for your selecting decision</p>
      );
    } else {
      setQuantity(100);
      setError(<p className="text-red-500">You've to Order minimum 100pcs</p>);
    }
  };
  const handleIncrement = () => {
    if (quantity >= 1000) {
      setError(
        <p className="text-red-500">Please select under available items</p>
      );
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="text-center text-3xl font-bold text-primary">
            Product Details
          </h2>
          <h2 class="card-title">Item Name: {tool?.name}</h2>
          <p class="py-4">
            <b>Description:</b> {tool?.description}
          </p>
        </div>
        <figure>
          <img src={tool?.image} alt="" />
        </figure>
      </div>
      <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
        <form onSubmit={handlePurchasing} class="card-body">
          <h2 className="text-center text-3xl font-bold text-primary">
            Order Form
          </h2>

          <div class="form-control">
            <input
              type="text"
              value={user?.displayName || user?.name}
              required
              disabled
              placeholder="Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              value={user?.email}
              required
              disabled
              placeholder="Your Email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              required
              placeholder="Address"
              class="input input-bordered"
            />
          </div>
          <h2 className="text-xl text-center">
            Available Quantity: {tool.available_quantity}
          </h2>
          <p h2 className="text-x text-center">
            Minimum Order: {tool.minumum_order}
          </p>
          <h2 className="text-center">
            <b>Price: ${tool.price} per unit</b>
          </h2>
          <div className="flex justify-center mt-5">
            <div>
              <div className="input-group">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="mr-5 btn btn-outline btn-primary"
                >
                  -
                </button>
                <div className="form-control text-center">{quantity}</div>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="ml-5 btn btn-outline btn-primary"
                >
                  +
                </button>
              </div>
              {error}
            </div>
          </div>

          <div class="form-control mt-6">
            <input
              class="btn btn-primary"
              type="submit"
              value="Confirm Purchase"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
