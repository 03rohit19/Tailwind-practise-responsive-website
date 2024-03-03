import { FaRobot } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header3 = () => {
  return (
    <>
      <section className="bg-slate-100 md:h-[800px] md:mt-60">
        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
          <div
            className="flex flex-col mb-14 space-y-8 md:w-1/2 mt-20"
            data-aos="fade-left "
            data-aos-duration="1000"
          >
            <div className="text-left">
              <a
                href="#"
                className="p-1 text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
              >
                About Us
              </a>
            </div>

            <h1 className="max-w-md text-4xl font-bold text-left text-black md:text-5xl">
              Artificial Intelligence for Your Business
            </h1>
            <p className="max-w-sm  text-slate-800 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              ratione rem dolorum illum, nam suscipit nihil quidem iste
              laboriosam tenetur saepe accusamus deserunt qui sit placeat
              reiciendis cumque quasi hic?
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

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6  md:ml-64">
            <div
              className="flex flex-col items-center p-6 space-y-6 bg-[#fff] rounded-lg mt-4 text-black hover:bg-[#1363c6] hover:text-white"
              data-aos="fade-left "
              data-aos-duration="2000"
            >
              <a className="bg-[#fff] rounded-full p-7 border cursor-pointer border-[#1363c6]">
                <FaRobot className="text-center text-[#1363c6] text-4xl" />
              </a>
              <h5 className="text-lg font-bold">Robotic Automation</h5>
              <p className="text-sm  text-center">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
              <a
                href="#"
                className="p-1 text-center px-4 text-black border border-slate-400 rounded-full baseline"
              >
                Read More
              </a>
            </div>
            <div
              className="flex flex-col items-center p-6 space-y-6 bg-[#fff] rounded-lg mt-7  text-black hover:bg-[#1363c6] hover:text-white"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <a className="bg-[#fff] rounded-full p-7 border cursor-pointer border-[#1363c6]">
                <FaRobot className="text-center text-[#1363c6] text-4xl" />
              </a>
              <h5 className="text-lg font-bold text-black">
                Robotic Automation
              </h5>
              <p className="text-sm text-black text-center">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
              <a
                href="#"
                className="p-1 text-center px-4 text-black border border-slate-400 rounded-full baseline"
              >
                Read More
              </a>
            </div>
            <div
              className="flex flex-col items-center p-6 space-y-6 bg-[#fff] rounded-lg md:mt-4  text-black hover:bg-[#1363c6] hover:text-white"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <a className="bg-[#fff] rounded-full p-7 border cursor-pointer border-[#1363c6]">
                <FaRobot className="text-center text-[#1363c6] text-4xl" />
              </a>
              <h5 className="text-lg font-bold text-black">
                Robotic Automation
              </h5>
              <p className="text-sm text-black text-center">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
              <a
                href="#"
                className="p-1 text-center px-4 text-black border border-slate-400 rounded-full baseline"
              >
                Read More
              </a>
            </div>
            <div
              className="flex flex-col items-center p-6 space-y-6 bg-[#fff] rounded-lg md:mt-7  text-black hover:bg-[#1363c6] hover:text-white"
              data-aos="fade-left "
              data-aos-duration="3000"
            >
              <a className="bg-[#fff] rounded-full p-7 border cursor-pointer border-[#1363c6]">
                <FaRobot className="text-center text-[#1363c6] text-4xl" />
              </a>
              <h5 className="text-lg font-bold text-black">
                Robotic Automation
              </h5>
              <p className="text-sm text-black text-center">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
              <a
                href="#"
                className="p-1 text-center px-4 text-black border border-slate-400 rounded-full baseline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header3;
