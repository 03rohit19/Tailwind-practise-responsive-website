const Header6 = () => {
  return (
    <>
      <section className="bg-[#fff] md:h-[850px]">
        <div className="container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 ">
          <div className="flex flex-col mb-14 space-y-8 md:w-1/2 mt-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 border border-black ">
              <div className="flex flex-col justify-between">
                <div className="flex justify between">01 lorem ipsum </div>
                <div>02</div>
                <div>03</div>
              </div>
            </div>
            <div className="col-span-1 border border-black">
              <div className="flex flex-col">
                <div>01</div>
                <div>02</div>
                <div>03</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header6;
