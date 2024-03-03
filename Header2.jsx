import { FaCheck } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import heroImage2 from "../assets/bannerImage.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header2 = () => {
  return (
    <>
      <section className="bg-[#fff] md:h-[520px]">
        <div className="container flex flex-col items-center px-6 py-10 mx-auto space-y-0 md:space-y-0 md:flex-row ">
          <div
            className="md:w-[50%] "
            data-aos="fade-left "
            data-aos-duration="1000"
          >
            <img
              src={heroImage2}
              alt="Hero-image"
              className="md:w-[95%]  md:-mb-0 md:overflow-hidden"
            ></img>
          </div>
          <div
            className="flex flex-col mb-14 space-y-4 md:w-1/2 mt-20"
            data-aos="fade-left "
            data-aos-duration="3000"
          >
            <div className="text-center md:text-left mt-10 md:ml-16">
              <a
                href="#"
                className="p-1 text-center px-4 text-blue-700 bg-[#fff] border border-slate-400 rounded-full baseline"
              >
                About Us
              </a>
            </div>

            <h1 className="max-w-md text-4xl font-bold text-left text-black md:text-5xl md:ml-16">
              We Make Your Business Smarter with Artificial Intelligence
            </h1>
            <p className="max-w-sm  text-slate-800 text-left md:ml-16">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <p className="max-w-sm  text-slate-800 text-left md:ml-16">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor.
            </p>
            <div className=" text-center  md:flex flex-col-2 md:ml-16 justify-between w-1/2">
              <div className=" text-left  col-span-1 mb-1">
                <h6 className="flex ml-1 font-sans font-semibold">
                  <FaCheck className="text-[#1363c6]  my-1 mx-1 " />
                  Award winning
                </h6>
                <h6 className="flex ml-1 m-1 font-sans font-semibold ">
                  <FaCheck className="text-[#1363c6]  my-1 mx-1 " />
                  Professional Staff
                </h6>
              </div>
              <div className=" text-left col-span-1 mb-1 ">
                <h6 className="flex ml-1 m-1 font-sans font-semibold">
                  <FaCheck className="text-[#1363c6]  m-1 " />
                  24/7 Support
                </h6>
                <h6 className="flex m-1 font-sans font-semibold">
                  <FaCheck className="text-[#1363c6]   m-1 " />
                  Fair Prices
                </h6>
              </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-2 md:ml-16">
              <a
                href="#"
                className="p-3 px-6  text-white text-center bg-[#1363c6] rounded-full baseline hover:bg-blue-700"
              >
                Read More
              </a>
              <a className="bg-[#fff] rounded-full p-4 border cursor-pointer border-[#1363c6]">
                <FaFacebookF className="text-center text-[#1363c6] hover:text-black" />
              </a>

              <a className="bg-[#fff] rounded-full p-4 border cursor-pointer border-[#1363c6]  ">
                <FaTwitter className="text-center text-[#1363c6] hover:text-black " />
              </a>
              <a className="bg-[#fff] rounded-full p-4 border cursor-pointer border-[#1363c6]  ">
                <FaInstagram className="text-center text-[#1363c6] hover:text-black" />
              </a>
              <a className="bg-[#fff] rounded-full p-4 border cursor-pointer border-[#1363c6]  ">
                <FaLinkedinIn className="text-center text-[#1363c6] hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header2;
