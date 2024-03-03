import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "../assets/heroImage.png";
import backgroundImage from "../assets/Image.png";
AOS.init();

const Service = () => {
  return (
    <>
      <section
        className="bg-[#1363C6] md:h-[400px] bg-cover"
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
              Services
            </h1>
          </div>
          <div className="md:w-[46%]  md:overflow-hidden ">
            <img
              src={HeroImage}
              alt="Hero-image"
              className="md:w-[74.3%] md:mt-9 md:-mb-0 md:overflow-hidden"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
