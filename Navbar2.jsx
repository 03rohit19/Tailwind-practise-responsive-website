const Navbar2 = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Service",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-blue-700 fixed ">
        <div>
          <h1 className="text-5xl font-sans ml-2">Ai Tech</h1>
        </div>
        <ul className="flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
