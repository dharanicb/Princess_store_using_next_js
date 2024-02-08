import { useDispatch } from "react-redux";
import { loaderSuccess } from "@/Store/Reducers/loaderSlice";


function ErrorPopup({ isOpen, errorMessage }) {
  const dispatch = useDispatch();

  //to close modal
  const hanldeClose = () => {
    dispatch(loaderSuccess());
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={hanldeClose}
          className="fixed z-30 flex flex-col justify-center items-center w-screen h-screen"
        >
          <div className="md:w-[400px] sm:w-[300px] flex flex-col justify-center items-center bar">
            <div className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all opacity-100 scale-100">
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b-2 pb-2">
                Error Message
              </h3>
              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  {errorMessage}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => hanldeClose}
                  className="m-5 sm:w-[100px] bg-[#6c6c9b] hover:bg-[#555590] text-white font-bold py-2 px-4 rounded sm:text-[16px] self-center"
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ErrorPopup;
