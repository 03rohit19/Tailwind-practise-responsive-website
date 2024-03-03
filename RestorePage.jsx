import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { removeItem } from "../utils/restoreSlice";

const RestorePage = () => {
  const restoredItems = useSelector((store) => store.restore.items);
  console.log(restoredItems);

  const dispatch = useDispatch();

  const handleRestore = (id) => {
    // Find the deleted item to be restored

    // Dispatch removeItem action to remove the item from deletedData
    dispatch(removeItem(id));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <Link
        to="/panel"
        className="text-black text-xl font-bold hover:underline"
      >
        <FaArrowLeft className="ml-10 mt-6" />
      </Link>
      <h1 className="text-3xl font-bold mb-4">Deleted Games</h1>
      {restoredItems.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {restoredItems.map((item) => (
            <div
              key={item._id}
              className="bg-gray-200 p-4 rounded-md flex items-center space-x-4"
            >
              <img
                src={item.gameLogo}
                alt={`${item.gameName} Logo`}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.gameName}</h2>

                <button
                  onClick={() => handleRestore(item._id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-full mt-2"
                >
                  Restore
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No deleted items present.</p>
      )}
    </div>
  );
};

export default RestorePage;
