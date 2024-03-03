import { useParams, Link } from "react-router-dom";
import Data from "../assets/Data";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import { CgAddR } from "react-icons/cg";

const renderStars = (rating) => {
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <FaStar
      key={index}
      className={
        index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
      }
    />
  ));
  return stars;
};

const GameDescription = () => {
  const { id } = useParams();
  const gameDetails = Data.find((game) => game._id === id);

  if (!gameDetails) {
    return <div>Game not found</div>;
  }

  return (
    <>
      <section className="bg-white  md:h-[280px]">
        <div className="flex flex-col gap-0 ">
          <div className="flex">
            <div className="col-span-1  bg-white h-[4000px] w-40 shadow-sm shadow-black">
              <Link
                to="/panel"
                className="text-black text-xl font-bold hover:underline"
              >
                <FaArrowLeft className="ml-10 mt-6" />
              </Link>

              <button className="mt-12 ml-6">
                <CgAddR className="ml-3 text-2xl" />
              </button>
            </div>

            <div className="col-span-1  h-72 w-full  bg-cover relative bg-white shadow-sm shadow-black">
              <img
                src={gameDetails.gameBanner}
                alt="Hero-image"
                className=" h-[90%] w-full object-fill blur-sm"
                data-aos="fade-left "
                data-aos-duration="3000"
              ></img>
              <div className="absolute bottom-0 left-32 h-60 w-[860px] rounded-xl bg-[#fff] shadow-md shadow-black">
                <div className="grid grid-cols-1 items-center px-6 space-y-0  ">
                  <div className="col col-span w-full">
                    <div className="flex">
                      <img
                        src={gameDetails.gameLogo}
                        alt="Hero-image"
                        className=" w-48 object-contain h-40 m-4 bg-slate-700 rounded-lg border-4 shadow-md shadow-black border-black mr-7 "
                        data-aos="fade-left "
                        data-aos-duration="3000"
                      ></img>
                      <div data-aos="fade-left " data-aos-duration="3000">
                        <h1 className="text-4xl mt-7 ml-2 font-bold text-blue-950">
                          {gameDetails.gameName}
                        </h1>
                        <p className="ml-3 font-bold mt-3 text-2xl text-green-700 ">
                          {gameDetails.developers}
                        </p>
                        <p className="ml-3 mt-3 text-lg font-sans font-bold text-red-800">
                          {gameDetails.awards[0].category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 h-80 mt-6 ">
        <div
          className="absolute  ml-6 bottom-0 left-64 mb-28 h-36 w-[860px] rounded-xl bg-[#fff] shadow-md shadow-black"
          data-aos="fade-left "
          data-aos-duration="3000"
        >
          <div className=" flex flex-col text-center mt-4">
            <h1 className="font-semibold text-2xl">
              {gameDetails.genre.join()}
            </h1>
          </div>
          <div className="grid grid-cols-4  items-center px-6 space-y-0 mt-4">
            <div className="col col-spa-1 w-full border-r-2 border-black">
              <h1 className=" text-center ml-2 font-bold text-blue-950">
                Search Count -
                <span className="ml-2">{gameDetails.searchCount}</span>
              </h1>
            </div>
            <div className="col col-spa-1 w-full border-r-2 border-black">
              <h1 className=" text-center ml-2 font-bold text-blue-950">
                Status -<span className="ml-2">{gameDetails.status}</span>
              </h1>
            </div>
            <div className="col col-spa-1 w-full border-r-2 border-black">
              <h1 className=" text-center ml-2 font-bold text-blue-950">
                Total Downloads -
                <span className="ml-2">{gameDetails.totalDownloads}</span>
              </h1>
            </div>
            <div className="col col-spa-1 w-full border-r-2 border-black">
              <h1 className=" text-center ml-2 font-bold text-blue-950">
                Total Users -
                <span className="ml-2">{gameDetails.totalUsers}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 h-80 ">
        <div
          className=" ml-72 bottom-0 left-72 mb-20 h-60 w-[860px] rounded-xl bg-[#fff] shadow-md shadow-black"
          data-aos="fade-left "
          data-aos-duration="3000"
        >
          <div className="grid grid-cols-2 items-center px-6  ">
            <div className="col col span-1  w-full h-full mt-">
              <h1 className="p-2 uppercase font-bold font ml-8 text-xl font-sans">
                Founders
              </h1>
              <div className="grid grid-cols-2 w-full h-full">
                <div className="col col col-span-1  w-full h-full">
                  <div className="py-6 px-6 max-w-sm mx-auto ">
                    <img
                      className="w-32 h-24 m-4 bg-slate-700 rounded-lg border-4 shadow-md shadow-black border-black object-cover "
                      src={gameDetails.founders[0].image}
                      alt="Founder Face"
                    />
                    <p className="font-bold ml-9 space-y-2">
                      {gameDetails.founders[0].name}
                    </p>
                  </div>
                </div>
                <div className="col col col-span-1 w-full h-full">
                  <div className="py-6 px-6 max-w-sm mx-auto ">
                    <img
                      className="w-32 h-24 m-4 bg-slate-700 rounded-lg border-4 shadow-md shadow-black border-black object-cover "
                      src={gameDetails.founders[1].image}
                      alt="Founder Face"
                    />
                    <p className="font-bold ml-9 space-y-2">
                      {gameDetails.founders[1].name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col col-span-1 w-[50%] ml-40">
              <img
                src={gameDetails.gallery.images[0]}
                alt="Hero-image"
                className=" w-48 mt-4 h-40 m-4 bg-slate-700 rounded-lg border-4 shadow-md shadow-black border-black mr-7 object-cover"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 h-80 ">
        <div
          className=" ml-72 bottom-0 left-72 mb-20 h-60 w-[860px] rounded-xl bg-[#fff] shadow-sm shadow-black"
          data-aos="fade-left "
          data-aos-duration="3000"
        >
          <div className="grid grid-cols-2 items-center px-6 space-y-0  ">
            <div className="col col-span-1">
              <h1 className="text-2xl font-sans font-bold mt-4 uppercase text-green-950">
                Summary
              </h1>
              <p className="text-sm mt-5">{gameDetails.gameDescription}</p>
            </div>
            <div className="col col-span-1 text-center ">
              <div className="grid grid-cols-2 mt-12">
                <div className="col colspan-1">
                  <h2 className="font-bold text-xl">Developers</h2>
                  <span className="font-semibold text-sm text-gray-600">
                    {gameDetails.developers}
                  </span>
                </div>
                <div className="col colspan-1">
                  <h2 className="font-bold text-xl">Genre</h2>
                  <span className="font-semibold text-sm text-gray-600">
                    {gameDetails.genre.join()}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <div className="col colspan-1">
                  <h2 className="font-bold text-xl">Publishers</h2>
                  <span className="font-semibold text-sm text-gray-600">
                    {gameDetails.publishers}
                  </span>
                </div>
                <div className="col colspan-1">
                  <h2 className="font-bold text-xl">Developers</h2>
                  <span className="font-semibold text-sm text-gray-600">
                    {gameDetails.platform.join()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 h-60 ">
        <div
          className=" ml-72 bottom-0 left-72 mb-20 h-60 w-[860px] rounded-xl "
          data-aos="fade-left "
          data-aos-duration="3000"
        >
          <div className="grid grid-cols-1 items-center px-6 space-y-0  ">
            <div className="col col-span w-full">
              <div className=" col-span-1 ">
                <h1 className="text-4xl mt-7 ml-2 font-bold text-blue-950">
                  {gameDetails.gameName} - Latest Contents
                </h1>
              </div>
              <div className="col col col-span-1 mt-6">
                <div className="flex justify-center md:justify-start animate__animated animate__slideInRight">
                  <a
                    href="#"
                    className="p-3 px-6 pt-2 ml-3 font-bold text-white bg-red-600 border border-[#fff] uppercase rounded-full baseline hover:text-black hover:bg-[#fff] animate__animated animate__slideInRight"
                  >
                    All
                  </a>
                  <a
                    href="#"
                    className=" ml-2 p-3 px-6 pt-2 font-bold text-black bg-[#fff] border border-gray-300 rounded-full baseline uppercase"
                  >
                    Videos
                  </a>
                  <a
                    href="#"
                    className=" ml-2 p-3 px-6 pt-2 font-bold text-black bg-[#fff]  border border-gray-300  rounded-full baseline uppercase"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 h-[800px]">
        {gameDetails.rating.comments.map((comment, index) => (
          <div
            key={index}
            className="ml-72 bottom-0 left-72 mb-20 h-36 w-[860px] bg-[#fff] border-b border-black"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="grid grid-cols-1 items-center px-6 space-y-0">
              <div className="col col-span w-full">
                <div className="flex">
                  <img
                    src={comment.userImage}
                    alt="Hero-image"
                    className="w-52 h-28 m-4 bg-slate-700 rounded-lg object-fill"
                  />
                  <div className="p-4 ml-3">
                    <p className="font-mono font-semibold text-gray-600">
                      {comment.comments}
                    </p>
                    <h2 className="font-mono font-bold text-lg text-black">
                      {comment.userName}
                    </h2>
                    <div className="flex items-center">
                      <span className="font-bold text-yellow-500 pr-2">
                        Ratings -{" "}
                      </span>
                      {renderStars(comment.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-100 h-[900px] ">
        <div className="flex content-center">
          <h1 className="ml-[335px] text-4xl  font-bold text-blue-950">
            Gallery Section
          </h1>
        </div>

        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gameDetails.gallery.images.map((image, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 space-y-6 rounded-lg mt-4`}
                data-aos="fade-left"
                data-aos-duration={`${(index + 1) * 1000}`}
              >
                <div className={`md:w-full md:overflow-hidden rounded-lg`}>
                  <img
                    src={image}
                    alt={`Hero-image-${index}`}
                    className={`md:overflow-hidden hover:scale-125 transition duration-500 cursor-pointer object-cover h-48 w-48`}
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 h-[900px]">
        <div className="flex content-center">
          <h1 className="ml-[335px] text-4xl font-bold text-blue-950">
            Video Section
          </h1>
        </div>
        <div className="h-[40%] w-[50%] ml-[140px]">
          <ReactPlayer controls={true} url={gameDetails.gallery.videos[0]} />
        </div>
      </section>
    </>
  );
};

export default GameDescription;
