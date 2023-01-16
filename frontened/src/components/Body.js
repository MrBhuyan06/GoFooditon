import React, { useEffect } from "react";
import Carousel from "./Carousel.js";
import Resturent from "./ResturentCard.js";
import { ResturentList } from "../confic.js";
import { useState } from "react";
import Shimmer from "./Shimer.js";
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
  const [resturentListAll, setResturentListAll] = useState([]);

  const [filterResturentList, setFilterResturentLIst] = useState([]);

  console.log("render");
  // Lets deep Drive to useEffect
  // It is used to render somethink after the inistial render
  // for rendering the compenets as the prop or the state change
  useEffect(() => {
    // Let make a Api class here
    console.log("hello");
    getResturentData();
  }, []);

  //  api function to get the data
  async function getResturentData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.281612&lng=85.88029879999999&page_type=DESKTOP_WEB_LISTING"
    );
    const readableData = await data.json();
    console.log(readableData);

    setResturentListAll(readableData?.data?.cards[2]?.data?.data?.cards);
    setFilterResturentLIst(readableData?.data?.cards[2]?.data?.data?.cards);
  }

  // early return
  // for the init render resturentList will be null so we cant define map on undefine
  // so this is use
  if (!resturentListAll) {
    return;
  }

  // This condition for the time when we have blank search input to render all the card
  return filterResturentList?.length === 0 ? (
    <Shimmer />
  ) : (
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
              const filterData = fliterResto(searchTxt, resturentListAll);
              // setSearchTxt(filterData);
              console.log("filter Data", filterData);
              setFilterResturentLIst(filterData);
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
        {filterResturentList.map((resto) => {
          // console.log("helllo");
          // console.log(resto);
          return <Resturent {...resto.data} key={resto.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
