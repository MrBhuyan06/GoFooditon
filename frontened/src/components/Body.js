import Carousel from "./Carousel.js";
import Resturent from "./ResturentCard.js";

const Body = () => {
  return (
    <>
      <Carousel />

      {/**
       * This the Card Components
       */}
      <div className=" mt-5 w-4/5 mx-auto container  space-y-4 item-start justify-between resturen-list f flex flex-row flex-wrap space-x-1 ">
        {Array(10)
          .fill("")
          .map((resto, index) => {
            return <Resturent key={index} />;
          })}
      </div>
    </>
  );
};

export default Body;
