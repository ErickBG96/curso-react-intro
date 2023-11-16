import {createPortal} from "react-dom";

const Modal = ({children}) => {
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      {children}
    </div>,
    document.getElementById('modal')
  )
};

export  {Modal}
