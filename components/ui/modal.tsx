interface ModalProps {
  message: string;
  onClick: () => void;
};

const Modal = ({message, onClick}: ModalProps) => {
  return (
    <div className="z-10 absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center p-4">
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
      <div role="alertdialog" aria-label="modal" className="z-10 p-6 rounded-xl bg-white text-black flex flex-col justify-center items-center gap-6">
        <h1 className="text-xl sm:text-3xl text-center font-bold">
          {message.toUpperCase()}
        </h1>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold" onClick={onClick}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}

export default Modal;
