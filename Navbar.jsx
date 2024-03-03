import { AiOutlineMenu } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgAddR } from "react-icons/cg";
import Modal from "./Modal";
import { useState } from "react";
AOS.init();

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="w-full bg-[#1363C6] border-b border-blue-600  "
        data-aos="fade-up "
        data-aos-duration="3000"
      >
        {/* navbar */}
        <nav className="container mx-auto bg-[#1363C6] p-6  ">
          {/* flex container */}
          <div className="flex items-center justify-between">
            <div className="text-4xl font-sans font-bold text-[#fff]">
              AI Tech
            </div>
            <AiOutlineMenu className="text-3xl md:hidden block" />
            {/* <AiOutlineClose className="text-3xl md:hidden block" /> */}

            {/* menu itmes */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-slate-800 text-[#fff]">
                Home
              </a>
              <a href="/about" className="hover:text-slate-800 text-[#fff]">
                About
              </a>
              <a href="/service" className="hover:text-slate-800 text-[#fff]">
                Services
              </a>
              <a href="/panel" className="hover:text-slate-800 text-[#fff]">
                Gaming Panel
              </a>
              <a className="hover:text-slate-800 text-[#fff] cursor-pointer">
                <CgAddR
                  className="ml-3 text-2xl"
                  onClick={() => setShowModal(true)}
                />
              </a>
              <a href="/test" className="hover:text-slate-800 text-[#fff]">
                Test
              </a>
              <a href="/test2" className="hover:text-slate-800 text-[#fff]">
                Test2
              </a>
            </div>

            <a
              href="#"
              className="hidden md:block p-1 px-4  text-black bg-[#fff] rounded-full baseline"
            >
              Login In
            </a>
          </div>
        </nav>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
