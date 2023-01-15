import { IMG_URL } from "../confic.js";
const Resturent = ({
  name,
  cuisines,
  city,
  slugs,
  cloudinaryImageId,
  avgRating,
}) => {
  return (
    <>
      <div className="card w-56 hover:scale-110 transform transition duration-500   border bg-base-100 shadow-xl ">
        <figure>
          <img src={IMG_URL + cloudinaryImageId} alt="Shoes" />
        </figure>
        <div className="card-body p-1">
          <h2 className="card-title">{name}</h2>
          <p>{cuisines}</p>
          <div className="card-actions ">
            <div className="badge badge-outline">{slugs.city}</div>
            <div className="badge badge-outline">{avgRating}start</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturent;
