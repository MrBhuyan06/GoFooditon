const Resturent = () => {
  return (
    <>
      <div className="card w-56 hover:scale-110 transform transition duration-500   border bg-base-100 shadow-xl ">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body p-1">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturent;
