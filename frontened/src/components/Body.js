import React from "react";
import Carousel from "./Carousel.js";
import Resturent from "./ResturentCard.js";
import { ResturentList } from "../confic.js";
import { useState } from "react";

// Filter Function
function fliterResto(searchTxt, Resto) {
  const filterDatas = Resto.filter((resto) => {
    return resto?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase());
  });
  return filterDatas;
}

const Body = () => {
  // Declaring The state for the searchtext
  const [searchTxt, setSearchTxt] = useState("");
  //Declaring the state for the resto list so that we can pass the list for seacrh resto in the map
  const [resturentList, setResturentList] = useState(ResturentList);

  return (
    <>
      <Carousel />

      {/**
       * Search Area
       */}
      <div className="form-control mt-5   ">
        <div className="input-group w-full j sm:justify-center md:justify-end">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="btn btn-square"
            onClick={() => {
              // A function will be call to filter the resto for search
              const filterData = fliterResto(searchTxt, resturentList);
              // setSearchTxt(filterData);
              console.log("filter Data", filterData);
              setResturentList(filterData);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/**
       * This the Card Components
       */}
      <div className=" mt-5 w-4/5 mx-auto container  space-y-4 item-start justify-between resturen-list f flex flex-row flex-wrap space-x-1 ">
        {resturentList.map((resto) => {
          console.log("helllo");
          console.log(resto);
          return <Resturent {...resto.data} key={resto.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
