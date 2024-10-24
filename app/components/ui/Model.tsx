import { RxCross2 } from "react-icons/rx";

interface ModelProps {
    handleClose: () => void;
    children: React.ReactNode
}

export default function Model({handleClose, children}: ModelProps) {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-screen bg-[#0000004d]">
          <button onClick={handleClose} className="absolute top-5 right-10">
            <RxCross2 color="white" size={40} />
          </button>
          <div className=" bg-light-white p-6 rounded-lg max-w-[500px] w-[90%] mr-4 sm:w-2/3">
            {children}
          </div>
        </div>
    );
}