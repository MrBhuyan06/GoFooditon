import React from "react";
import ReactDOM from "react-dom/client.js";

const Demo = () => {
  return (
    <>
      <div className="card w-96 bg-base-100 mt-2 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-yellow-700 bg-red-900 ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Demo />);
