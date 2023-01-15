const Carousel = () => {
  return (
    <>
      <div className="bg-gray-800">
        <div className="carousel w-1/2 m-auto mt-2 rounded-md shadow-md  shadow-gray-500">
          <div
            id="slide1"
            className="carousel-item relative w-full object-scale-down h-56  "
          >
            <img
              src="https://scontent.fbom12-1.fna.fbcdn.net/v/t1.6435-9/53165005_302503667081261_4207517565670391808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SzTJFhxTzsQAX-4f2b5&_nc_ht=scontent.fbom12-1.fna&oh=00_AfBvZAUR3IGV57Ll9SlkfFYgMwUh-jXYyOPjn_NAKnctxQ&oe=63EBA19E"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full object-scale-down h-56"
          >
            <img
              src="https://scontent.fbom12-1.fna.fbcdn.net/v/t1.6435-9/53333283_300941620570799_2153889467167932416_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ob3L-I4CNQUAX_lrvAV&_nc_ht=scontent.fbom12-1.fna&oh=00_AfAuOsRKMvxOo6SF5_SFjbEKmVp_IwOII45EBpwi4yinVw&oe=63EB973C"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full object-scale-down h-56"
          >
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNXmIDar4Pc_pSvQt2Bkz60mqDZ_Q2X9A0VNqSW=s1360-w1360-h1020"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full object-scale-down h-56"
          >
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMa3T33PtAMCdesTMMYUBSFMQKt2CPkMkemg_Qr=s1360-w1360-h1020"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
