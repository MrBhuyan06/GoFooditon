import Carousel from "./Carousel.js";
import Resturent from "./ResturentCard.js";
const Shimmer = () => {
  return (
    <>
      <Carousel />
      <div className=" flex flex-row justify-between flex-wrap space-x-1 mt-10">
        {Array(10)
          .fill("")
          .map((index) => {
            return <Resturent key={index} />;
          })}
      </div>
    </>
  );
};

export default Shimmer;
