import Resturent from "./ResturentCard.js";
const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((index) => {
          return <Resturent key={index} />;
        })}
    </>
  );
};

export default Shimmer;
