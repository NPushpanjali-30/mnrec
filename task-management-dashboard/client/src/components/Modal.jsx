const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-11/12 md:w-1/2 shadow-xl">
        <button
          onClick={onClose}
          className="float-right text-red-500 text-xl"
        >
          ✖
        </button>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;