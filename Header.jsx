import HeroImage from "../assets/heroImage.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import backgroundImage from "../assets/Image.png";

AOS.init();

const Header = () => {
  return (
    <>
      <section
        className="bg-[#1363C6] md:h-[515px] bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        data-aos="fade-left "
        data-aos-duration="3000"
      >
        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
          <div className="flex flex-col mb-14 space-y-8 md:w-1/2 mt-20  ">
            <div className="text-center md:text-left animate__animated animate__slideInRight ">
              <a
                href="#"
                className="p-1 text-center px-4 text-[#fff] bg-[#1363C6] border border-[#fff] rounded-full baseline"
              >
                Ai.Tech
              </a>
            </div>

            <h1 className="max-w-md text-4xl font-bold text-center  md:text-left text-white md:text-5xl animate__animated animate__slideInRight animate__slow">
              Artificial Intelligence for Your Business
            </h1>
            <p className="max-w-lg text-xl text-center text-[#fff] md:text-left animate__animated animate__slideInRight animate__slow">
              Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
              dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
              sit
            </p>
            <div className="flex justify-center md:justify-start animate__animated animate__slideInRight">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-black bg-[#fff] rounded-full baseline"
              >
                Read More
              </a>
              <a
                href="#"
                className="p-3 px-6 pt-2 ml-3 text-white bg-[#1363C6] border border-[#fff] rounded-full baseline hover:text-black hover:bg-[#fff] animate__animated animate__slideInRight"
              >
                Login In
              </a>
            </div>
          </div>
          <div className="md:w-[46%]  md:overflow-hidden ">
            <img
              src={HeroImage}
              alt="Hero-image"
              className="md:w-[95%] md:mt-9 md:-mb-0 md:overflow-hidden"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
