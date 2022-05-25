import React from "react";
import { Link, useParams } from "react-router-dom";
import useToolDetail from "../hooks/useToolDetail";

const ProceedPurchase = () => {
  const { toolId } = useParams();
  const [tool] = useToolDetail(toolId);
  return (
    <div className="text-center mt-20">
      <h2 className="text-5xl text-primary mb-10">
        You are going to buy: {tool.name}
      </h2>
      <Link to={`/purchase/${toolId}`}>
        <button className="btn btn-outlined btn-primary">
          Proceed Purchase
        </button>
      </Link>
    </div>
  );
};

export default ProceedPurchase;
