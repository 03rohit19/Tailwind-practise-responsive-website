import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/restoreSlice";

import {
  FaSearch,
  FaArrowLeft,
  FaToggleOn,
  FaToggleOff,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import { BiChevronDown } from "react-icons/bi";
import Data from "../assets/Data";
import { useSelector } from "react-redux";

const GamingPanel2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(Data);
  const [deletedData, setDeletedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [confirmStatusOpen, setConfirmStatusOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const restoreItems = useSelector((store) => store.restore.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredData(Data);
  }, []);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  const handleSearch = () => {
    const filteredResult = Data.filter((item) =>
      item.gameName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResult);
    setCurrentPage(1);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setCurrentPage(1);
    console.log("reset called");
  };

  const handleToggle = (index) => {
    setSelectedGame(filteredData[index]);
    setConfirmStatusOpen(true);
  };

  const handleOpenStatusChange = () => {
    const updatedData = filteredData.map((game) =>
      game._id === selectedGame._id
        ? {
            ...game,
            status: game.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
          }
        : game
    );

    setFilteredData(updatedData);
    handleCloseStatusChange();
  };

  const handleCloseStatusChange = () => {
    setSelectedGame(null);
    setConfirmStatusOpen(false);
  };

  const handleDelete = (id) => {
    const deletedGame = filteredData.find((item) => item._id === id);

    dispatch(addItem(deletedGame));
    setSelectedGame(filteredData.find((item) => item._id === id));
    setConfirmDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = filteredData.filter(
      (game) => game._id !== selectedGame._id
    );
    setFilteredData(updatedData);
    setDeletedData((prevDeletedData) => [...prevDeletedData, selectedGame]);
    handleCloseDeleteConfirmationModal();
  };

  const handleCloseDeleteConfirmationModal = () => {
    setSelectedGame(null);
    setConfirmDeleteOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center px-6 mx-auto bg-slate-500 border border-black h-20">
        <div className="w-full flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="text-black text-xl font-bold hover:underline"
            >
              <FaArrowLeft className="mt-1" />
            </Link>

            <div className="relative inline-block">
              <div className="flex items-center border p-2">
                <BiChevronDown className="text-xl text-black" />
                <span className="ml-2">Users: {itemsPerPage}</span>
              </div>
              <select
                value={itemsPerPage}
                onChange={(e) =>
                  handleItemsPerPageChange(parseInt(e.target.value, 10))
                }
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              >
                {[10, 20, 30, 40, 50].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h1 className="text-xl mb-2 text-black font-bold">
            User-{filteredData.length}
          </h1>
          <div className="flex space-x-2">
            <button className="rounded-md" type="" onClick={handleSearch}>
              <FaSearch className="mt-1" />
            </button>
            <BiReset
              onClick={handleReset}
              className="mt-1 font-bold text-xl cursor-pointer"
            />

            <input
              type="text"
              placeholder="Search"
              className="border border-black"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
            ></input>
            <Link to="/panel/restore">
              <FaTrash className="mt-1 text-l" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-slate-300">
        <div className="w-full bg-slate-300">
          <table className="min-w-full border border-black bg-slate-800 text-white">
            <thead>
              <tr className="bg-black text-white">
                <th>
                  <input type="checkbox" />
                </th>
                <th className="p-3 text-sm font-semibold border border-black">
                  No.
                </th>
                <th className="border border-black font-semibold tracking-wide">
                  Name
                </th>
                <th className="border border-black font-semibold tracking-wide">
                  Publisher
                </th>
                <th className="border border-black font-semibold tracking-wide">
                  Developer
                </th>
                <th className="border border-black font-semibold tracking-wide">
                  Status
                </th>
                <th className="border border-black font-semibold tracking-wide bg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {displayedData.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-slate-600" : "bg-black text-white"
                  }
                >
                  <td className="p-3 text-sm font-semibold border border-black">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 text-sm font-semibold border border-black">
                    <a href="#">{startIndex + index + 1}</a>
                  </td>
                  <td className="p-3 text-sm font-semibold border border-black">
                    {item.gameName}
                  </td>
                  <td className="p-3 text-sm font-semibold border border-black">
                    {item.publishers}
                  </td>
                  <td className="p-3 text-sm font-semibold border border-black">
                    {item.developers}
                  </td>
                  <td
                    className="p-2 text-sm font-semibold border border-black cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    {item.status === "ACTIVE" ? (
                      <FaToggleOn className="ml-8 w-6 h-6 " />
                    ) : (
                      <FaToggleOff className="ml-8 w-8 h-8 " />
                    )}
                  </td>
                  <td className="p-3 text-center white flex font-bold  baseline">
                    <Link
                      to={`/panel/game/${item._id}`}
                      className=" hover:text-slate-400 flex items-center"
                    >
                      <FaEye className="mr-2" />
                    </Link>
                    <FaTrash
                      onClick={() => handleDelete(item._id)}
                      className=" hover:text-slate-400 flex items-center"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {confirmStatusOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-600 p-6 rounded-lg shadow-md shadow-white text-white">
            <h2 className="text-lg font-semibold mb-4">
              Change Status for {selectedGame?.gameName}
            </h2>
            <div className="flex justify-end">
              <button
                onClick={handleOpenStatusChange}
                className="px-4 py-2 bg-blue-500 text-white rounded-full border border-black shadow-md shadow-black mr-2"
              >
                Confirm
              </button>
              <button
                onClick={handleCloseStatusChange}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full border border-black shadow-md shadow-black"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmDeleteOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-600 p-6 rounded-lg shadow-md shadow-white text-white">
            <h2 className="text-lg font-semibold mb-4">
              Confirm Delete for {selectedGame?.gameName}
            </h2>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-full border border-black shadow-md shadow-black mr-2"
              >
                Confirm
              </button>
              <button
                onClick={handleCloseDeleteConfirmationModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full border border-black shadow-md shadow-black"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          className={`mx-1 px-3 py-2 rounded-md bg-slate-600 text-white ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePagination(index + 1)}
            className={`mx-1 px-3 py-2 rounded-md bg-slate-600 text-white ${
              currentPage === index + 1 && "bg-slate-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`mx-1 px-3 py-2 rounded-md bg-slate-600 text-white ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default GamingPanel2;
