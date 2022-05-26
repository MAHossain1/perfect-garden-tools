import React, { useState } from "react";

const OrderQuantity = () => {
  const [quantity, setQuantity] = useState(100);
  const [error, setError] = useState("");

  const handleDecrement = () => {
    if (quantity > 100) {
      setQuantity(quantity - 1);
      setError(
        <p className="text-primary">
          Thank you htmlFor your selecting decision
        </p>
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
  );
};

export default OrderQuantity;
