import Carousel from "./Carousel.js";
import Resturent from "./ResturentCard.js";
import { ResturentList } from "../confic.js";
import React from "react";

const Body = () => {
  return (
    <>
      <Carousel />

      {/**
       * This the Card Components
       */}
      <div className=" mt-5 w-4/5 mx-auto container  space-y-4 item-start justify-between resturen-list f flex flex-row flex-wrap space-x-1 ">
        {ResturentList.map((resto, index) => {
          return <Resturent {...resto.data} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
