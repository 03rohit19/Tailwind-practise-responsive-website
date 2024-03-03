import { FaQuoteLeft } from "react-icons/fa";
import TeamA3 from "../assets/memberOne (3).jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header8 = () => {
  return (
    <>
      <section className="bg-[#fff] ">
        <div className="container flex flex-col items-center px-6  space-y-0 md:space-y-0 md:flex-row">
          <div
            className="flex flex-col mb-14 space-y-8  mt-20 w-[50%] md:ml-8 items-start "
            data-aos="fade-left "
            data-aos-duration="1000"
          >
            <div className="text-left space-y-4 w-[100%] ">
              <a
                href="#"
                className="  p-1 text-center px-6 text-blue-700 border border-slate-400 rounded-full baseline"
              >
                Testimonial
              </a>
              <h1 className="text-4xl font-bold text-left text-black md:text-5xl">
                What Say Our Clients!
              </h1>
              <p className=" text-slate-800 text-left">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
            </div>

            <div className="flex justify-start">
              <a
                href="#"
                className="p-1 px-4  text-white bg-[#1363c6] rounded-full baseline text-center"
              >
                Read More
              </a>
            </div>
          </div>
          <div
            className="flex flex-col mb-14 space-y-8  mt-20 w-[60%] md:ml-6 items-start border-l border-blue-700 "
            data-aos="fade-left "
            data-aos-duration="3000"
          >
            <div className=" ml-6 text-left space-y-4 w-[100%] ">
              <FaQuoteLeft className="text-blue-800 h-8 w-8" />

              <p className=" text-slate-800 text-left text-xl">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor eirmod magna dolore erat amet
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 p-4"
                src={TeamA3}
                alt="Woman's Face"
              />
              <div className="fkex">
                <h1 className="text-lg text-black font-semibold mt-4">
                  Erin Lindford
                </h1>
                <p className="text-gray-500">Professor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header8;
