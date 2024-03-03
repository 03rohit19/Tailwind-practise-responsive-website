import ProImage1 from "../assets/projectImg1.jpg";
import ProImage2 from "../assets/projectImg2.jpg";
import ProImage3 from "../assets/projectImg3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Header5 = () => {
  return (
    <>
      <section className="bg-slate-100 md:h-[850px]">
        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 ">
          <div
            className="flex flex-col mb-14 space-y-8 md:w-1/2 mt-20"
            data-aos="fade-left "
            data-aos-duration="1000"
          >
            <div className="text-center">
              <a
                href="#"
                className="p-1 text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
              >
                About Us
              </a>
            </div>

            <h1 className=" text-4xl font-bold text-center text-black md:text-5xl">
              Artificial Intelligence for Your Business
            </h1>
          </div>
        </div>
        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 ">
          <div className="grid grid-cols-1 md:grid-cols-3  ">
            <div
              className="flex flex-col items-center p-6 space-y-6  rounded-lg mt-4"
              data-aos="fade-left "
              data-aos-duration="1000"
            >
              <div className="md:w-full  md:overflow-hidden rounded-lg">
                <img
                  src={ProImage1}
                  alt="Hero-image"
                  className="md:overflow-hidden hover:scale-125 transition duration-500 cursor-pointer object-cover"
                ></img>
              </div>
            </div>
            <div
              className="flex flex-col items-center p-6 space-y-6  rounded-lg mt-4"
              data-aos="fade-left "
              data-aos-duration="2000"
            >
              <div className="md:w-full  md:overflow-hidden rounded-lg">
                <img
                  src={ProImage2}
                  alt="Hero-image"
                  className="md:overflow-hidden hover:scale-125 transition duration-500 cursor-pointer object-cover"
                ></img>
              </div>
            </div>
            <div
              className="flex flex-col items-center p-6 space-y-6  rounded-lg mt-4"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <div className="md:w-full  md:overflow-hidden rounded-lg">
                <img
                  src={ProImage3}
                  alt="Hero-image"
                  className="md:overflow-hidden hover:scale-125 transition duration-500 cursor-pointer object-cover"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header5;
