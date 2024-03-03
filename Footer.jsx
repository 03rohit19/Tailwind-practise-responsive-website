import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/Image2.png";

AOS.init();

const Footer = () => {
  return (
    <>
      <footer
        className="bg-blue-950 md:h-[500px] bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container flex flex-col  px-6  space-y-0 md:space-y-0 md:flex-row  ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6  space-x-2   ">
            <div
              className="col-span-1 space-x-2 w-750 h-[100%] mt-16 text-center md:text-left ml-6 space-y-4"
              data-aos="fade-left "
              data-aos-duration="1000"
            >
              <a href="#" className="text-4xl text-white font-bold ml-2">
                Ai Tech
              </a>
              <p className="text-xl text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus officia eos eaque corporis ipsum perferendis illum
                excepturi consectetur.
              </p>
            </div>
            <div
              className="col-span-1 space-x-2 w-80 h-[100%] mt-14 text-center md:text-left ml-6 space-y-4 md:space-y-8"
              data-aos="fade-left "
              data-aos-duration="2000"
            >
              <a href="#" className="text-2xl text-white font-bold ml-2">
                Get in touch
              </a>
              <div className="flex flex-col space-y-3 md:space-y-6 mt-5 text-[#fff]">
                <div className="flex space-x-3 cursor-pointer">
                  <FaPhone className="text-xl text-slate-400" />
                  <a href="#"> 123 Street, New York, USA </a>
                </div>

                <div className="flex space-x-3">
                  <FaLocationDot className="text-xl text-slate-400" />
                  <a href="#"> +012 345 67890 </a>
                </div>
                <div className="flex space-x-3">
                  <IoMail className="text-xl text-slate-400" />
                  <a href="#"> info@example.com </a>
                </div>
                <div className="flex justify-center md:justify-start space-x-2">
                  <a className=" rounded-full p-4 border cursor-pointer ">
                    <FaFacebookF className="text-center text-[#fff]" />
                  </a>

                  <a className=" rounded-full p-4 border cursor-pointer  ">
                    <FaTwitter className="text-center text-[#fff] " />
                  </a>
                  <a className=" rounded-full p-4 border cursor-pointer  ">
                    <FaInstagram className="text-center text-[#fff] " />
                  </a>
                  <a className=" rounded-full p-4 border cursor-pointer  ">
                    <FaLinkedinIn className="text-center text-[#fff] " />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 space-x-2  w-80 h-[100%] mt-14 text-center md:text-left ml-6 space-y-4 md:space-y-8"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <a href="#" className="text-2xl text-white font-bold ml-2">
                Popular Link
              </a>
              <div className="flex flex-col space-y-3 md:space-y-6 mt-5 text-[#fff]">
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> About Us </a>
                </div>

                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Contact Us </a>
                </div>
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Privacy Policy </a>
                </div>
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Terms & Condition </a>
                </div>
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Career </a>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 space-x-2  w-80 h-[100%] mt-14 text-center md:text-left ml-6 space-y-4 md:space-y-8"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <a href="#" className="text-2xl text-white font-bold ml-2">
                Popular Link
              </a>
              <div className="flex flex-col space-y-3 md:space-y-6 mt-5 text-[#fff]">
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> About Us </a>
                </div>

                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Contact Us </a>
                </div>
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Privacy Policy </a>
                </div>
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Terms & Condition </a>
                </div>
                <div className="flex space-x-3">
                  <GrLinkNext className="text-xl text-slate-400" />
                  <a href="#"> Career </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 mt-4  md:mt-16">
          <div className=" ml-14 border-b border-gray-500 "></div>
          <div className="border-b border-gray-500 mr-14 "></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
