import { Button } from "../ui/button";


function Modal({ children, onClose } : {children: React.ReactNode; onClose: () => void}) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg flex-col items-center justify-center">
          {children}
          <Button onClick={onClose} className="mt-4">
            Close
          </Button>
        </div>
      </div>
    );
  }
  
  export default Modal;
  