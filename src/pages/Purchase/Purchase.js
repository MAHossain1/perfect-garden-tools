import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ToolContext } from "../../App";

const Purchase = () => {
  const { id } = useParams();
  const [tools] = useContext(ToolContext);

  const tool = tools.find(tool => tool._id == id);
  console.log(tool);

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
        <div class="card-body">
          <h2 className="text-center text-3xl font-bold text-primary">
            Order Form
          </h2>

          <div class="form-control">
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              placeholder="Your Email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              placeholder="Address"
              class="input input-bordered"
            />
          </div>
          <h2 className="text-xl">
            Available Quantity: {tool.available_quantity}
          </h2>
          <h2>
            <b>Price: ${tool.price} per unit</b>
          </h2>

          <div class="form-control mt-6">
            <button class="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>

    // <div className="blog-details">
    //   <div className="blog-image">
    //     <img src={tool?.image} alt="" />
    //   </div>
    //   <h1>{tool?.name}</h1>
    //   <p>{tool?.description}</p>
    //   {/*class="hero min-h-screen bg-base-200" <div class="hero-content text-center">
    //     <div class="max-w-md">
    //       <img src={tool.image} alt="" />

    //       <h1 class="text-3xl font-bold">{tool?.name}</h1>
    //       <p class="py-4">{tool.description}</p>
    //       <p>{tool.available_quantity}</p>
    //       <b>
    //         <p>{tool.price}</p>
    //       </b>
    //       <button class="btn btn-primary">Get Started</button>
    //     </div>
    //   </div> */}

    // </div>
  );
};

export default Purchase;
