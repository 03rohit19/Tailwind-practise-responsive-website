import TeamA from "../assets/memberOne (1).jpg";
import TeamA2 from "../assets/memberOne (2).jpg";
import TeamA3 from "../assets/memberOne (3).jpg";
import TeamA4 from "../assets/memberOne (4).jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header7 = () => {
  return (
    <>
      <section className="bg-slate-100 md:h-[900px] ">
        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
          <div
            className="flex flex-col mb-14 space-y-6 md:w-[60%] mt-20 "
            data-aos="fade-left "
            data-aos-duration="1000"
          >
            <div className="text-left">
              <a
                href="#"
                className="p-1 text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
              >
                Our Services
              </a>
            </div>

            <h1 className="max-w-md text-4xl font-bold text-left text-black md:text-4xl">
              Our Excellent AI Solutions for Your Business
            </h1>
            <p className="max-w-sm  text-slate-800 text-left">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <div className="flex justify-start">
              <a
                href="#"
                className="p-1 px-4  text-white bg-[#1363c6] rounded-full baseline text-center"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6  ">
            <div className="flex flex-col rounded-lg  ">
              <div
                className="flex flex-col items-center p-6 space-y-4 bg-[#fff] rounded-lg hover:border border-blue-600 "
                data-aos="fade-left "
                data-aos-duration="2000"
              >
                <img
                  src={TeamA}
                  alt="Hero-image"
                  className="md:overflow-hidden rounded-full w-[200px]"
                ></img>

                <div className="space-y-0">
                  <h5 className="text-lg font-bold text-black">
                    Borris Jhonson
                  </h5>
                  <p className="text-sm text-black text-center">
                    Founder & CEO
                  </p>
                </div>

                <div className="flex justify-center md:justify-start space-x-2">
                  <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer ">
                    <FaFacebookF className="text-center text-[#fff]" />
                  </a>

                  <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                    <FaTwitter className="text-center text-[#fff] " />
                  </a>
                  <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                    <FaInstagram className="text-center text-[#fff] " />
                  </a>
                  <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                    <FaLinkedinIn className="text-center text-[#fff] " />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-center p-6 space-y-4 bg-[#fff] rounded-lg mt-4 hover:border border-blue-600 "
              data-aos="fade-left "
              data-aos-duration="2000"
            >
              <img
                src={TeamA3}
                alt="Hero-image"
                className="md:overflow-hidden rounded-full w-[200px]"
              ></img>

              <div className="space-y-0">
                <h5 className="text-lg font-bold text-black">Borris Jhonson</h5>
                <p className="text-sm text-black text-center">Founder & CEO</p>
              </div>
              <div className="flex justify-center md:justify-start space-x-2">
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer ">
                  <FaFacebookF className="text-center text-[#fff]" />
                </a>

                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaTwitter className="text-center text-[#fff] " />
                </a>
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaInstagram className="text-center text-[#fff] " />
                </a>
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaLinkedinIn className="text-center text-[#fff] " />
                </a>
              </div>
            </div>

            <div
              className="flex flex-col items-center p-6 space-y-4 bg-[#fff] rounded-lg hover:border border-blue-600"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <img
                src={TeamA2}
                alt="Hero-image"
                className="md:overflow-hidden rounded-full w-[200px]"
              ></img>
              <div className="space-y-0">
                <h5 className="text-lg font-bold text-black">Borris Jhonson</h5>
                <p className="text-sm text-black text-center">Founder & CEO</p>
              </div>
              <div className="flex justify-center md:justify-start space-x-2">
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer ">
                  <FaFacebookF className="text-center text-[#fff]" />
                </a>

                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaTwitter className="text-center text-[#fff] " />
                </a>
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaInstagram className="text-center text-[#fff] " />
                </a>
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaLinkedinIn className="text-center text-[#fff] " />
                </a>
              </div>
            </div>
            <div
              className="flex flex-col items-center p-6 space-y-4 bg-[#fff] rounded-lg mt-4 hover:border border-blue-600"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <img
                src={TeamA4}
                alt="Hero-image"
                className="md:overflow-hidden rounded-full w-[200px]"
              ></img>
              <div className="space-y-0">
                <h5 className="text-lg font-bold text-black">Borris Jhonson</h5>
                <p className="text-sm text-black text-center">Founder & CEO</p>
              </div>
              <div className="flex justify-center md:justify-start space-x-2">
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer ">
                  <FaFacebookF className="text-center text-[#fff]" />
                </a>

                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaTwitter className="text-center text-[#fff] " />
                </a>
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaInstagram className="text-center text-[#fff] " />
                </a>
                <a className="bg-[#1363c6] rounded-full p-4 border cursor-pointer  ">
                  <FaLinkedinIn className="text-center text-[#fff] " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header7;
