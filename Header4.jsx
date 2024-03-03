import RobotImage from "../assets/roboImage.png";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

AOS.init();

const Header4 = () => {
  return (
    <>
      <section className="bg-[#1363C6] md:h-[758px]">
        <div className="container flex flex-col items-center px-6 py-10 mx-auto space-y-0 md:space-y-0 md:flex-row">
          <div
            className="flex flex-col mb-14 space-y-6 md:w-1/2 mt-16"
            data-aos="fade-left "
            data-aos-duration="2000"
          >
            <div className="text-center md:text-left">
              <a
                href="#"
                className="p-1 text-center px-4 text-[#fff] bg-[#1363C6] border border-[#fff] rounded-full baseline"
              >
                Why choose Us
              </a>
            </div>

            <h1 className="max-w-md text-4xl font-bold text-center  md:text-left text-white md:text-4xl">
              Best in AI Industry with 10 Years of Experience
            </h1>
            <p className="max-w-sm text-center text-[#fff] font-medium md:text-left tex">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor
            </p>
            <div className="flex space-x-3 ">
              <a className="bg-[#fff] rounded-full cursor-pointer p-2">
                <FaCheck className="text-[#1363C6]" />
              </a>
              <span className="text-[#fff] p-1 font-sans font-medium">
                Diam dolor diam ipsum et tempor sit
              </span>
            </div>
            <div className="flex space-x-3">
              <a className="bg-[#fff] rounded-full cursor-pointer p-2">
                <FaCheck className="text-[#1363C6]" />
              </a>
              <span className="text-[#fff] p-1 font-sans font-medium">
                Diam dolor diam ipsum et tempor sit
              </span>
            </div>
            <div className="flex space-x-3">
              <a className="bg-[#fff] rounded-full cursor-pointer p-2">
                <FaCheck className="text-[#1363C6]" />
              </a>
              <span className="text-[#fff] p-1 font-sans font-semibold">
                Diam dolor diam ipsum et tempor sit
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:w-[90%] space-y-2 ">
              <div className=" col-span-1 rounded-2xl  bg-white bg-opacity-10 p-3 ">
                <div className=" flex space-x-2">
                  <a className=" rounded-full cursor-pointer ">
                    <FaCheck className="text-[#fff] h-12 w-12" />
                  </a>
                  <div>
                    <h2 className="text-[#fff] p-1 font-sans font-bold text-3xl ">
                      <CountUp end={9999} duration={30} />
                    </h2>
                    <p className="text-[#fff] p-1 font-sans font-semibold">
                      Project complete
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-span-1 md:ml-5 rounded-2xl  bg-white bg-opacity-10 p-3">
                <div className=" flex space-x-2">
                  <a className=" rounded-full cursor-pointer ">
                    <FaCheck className="text-[#fff] h-12 w-12" />
                  </a>
                  <div>
                    <h2 className="text-[#fff] p-1 font-sans font-bold text-3xl">
                      <CountUp end={9999} duration={30} />
                    </h2>
                    <p className="text-[#fff] p-1 font-sans font-semibold">
                      Project complete
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col mb-14 space-y-8 md:w-1/2 "
            data-aos="fade-left "
            data-aos-duration="3000"
          >
            <div className=" md:mt-56 md:w-[90%]">
              <img
                src={RobotImage}
                alt="Hero-image"
                className=" md:-mb-0 md:overflow-hidden"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header4;
