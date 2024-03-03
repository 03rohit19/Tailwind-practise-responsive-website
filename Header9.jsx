import { FaTelegramPlane } from "react-icons/fa";

import NewsLetter from "../assets/newsLetter.Img.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header9 = () => {
  return (
    <>
      <section className="bg-[#1363C6] ">
        <div className="container flex flex-col items-center px-6  space-y-0 md:space-y-0 md:flex-row">
          <div
            className="flex flex-col mb-14 space-y-8  mt-20 md:w-[50%] md:-ml-6 items-start "
            data-aos="fade-left "
            data-aos-duration="1000"
          >
            <div className="text-left space-y-4 w-[100%] ">
              <img
                src={NewsLetter}
                alt="Hero-image"
                className="md:w-[100%]  md:-mb-0 md:overflow-hidden"
              ></img>
            </div>
          </div>
          <div
            className="flex flex-col mb-14 space-y-9  mt-20 md:w-[60%] md:ml-6 items-start"
            data-aos="fade-left "
            data-aos-duration="3000"
          >
            <div className="text-left space-y-4 w-[100%] ">
              <a
                href="#"
                className="  p-1 text-center px-4
                 text-[#fff] border border-slate-400    rounded-full baseline"
              >
                Newsletter
              </a>

              <h1 className="text-4xl font-bold text-left text-[#fff] md:text-4xl">
                Let us subscribe the newsletter
              </h1>
              <div className=" flex  bg-[#fff] md:w-[90%] rounded-3xl p-2 px-3 justify-between ">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="text-slate-800"
                />
                <button>
                  <FaTelegramPlane className="w-7 h-7 text-blue-700" />
                </button>
              </div>

              <p className=" text-slate-800 text-left font-sans font-medium">
                Diam sed sed dolor stet amet eirmod
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header9;
