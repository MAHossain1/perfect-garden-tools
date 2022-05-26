import React from "react";
import quality1 from "../../images/quality/quality1.jpg";
import quality2 from "../../images/quality/quality2.jpg";
import quality3 from "../../images/quality/quality3.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      <h2 className="text-center text-primary text-3xl font-bold my-5">
        Why Choose Us!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={quality1} alt="quality" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Quality</h2>
            <p>
              The strict quality control procedure is executed,
              PerfectGardenTools QC team will carry on a systematic inspection
              from the raw materials up to the logo marking and packaging.
            </p>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={quality3} alt="quality" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Custom Design</h2>
            <p>
              Customized color and packaging are welcomed, Gardepot can help you
              to build your own brand and also can help you to make your
              innovations to actual products.
            </p>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={quality2} alt="quality" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Customer Support</h2>
            <p>
              htmlFor the past 20 years, we have been one of the biggest garden
              & lawn products export companies in Bangladesh, PerfectGardenTools
              ship a large amount of containers every month worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
