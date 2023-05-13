import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

const customStyles = {
  content: {
    top: `50%`,
    left: `50%`,
    right: `auto`,
    bottom: `auto`,
    marginRight: `-50%`,
    transform: `translate(-50%, -50%)`,
    overflow: `auto`,
    padding: `0`,
    borderRadius: `12px`,
    border: `0`,
    maxHeight: `calc(100vh - 30px)`,
  },
  overlay: {
    background: `rgba(33, 37, 41, 0.6)`,
    zIndex:`2000`,
  }
};

const CustomModal = ({ title, isOpen, onClose, className, setIsOpen, isLoading, children }) => {
  Modal.setAppElement(`body`);

  return (
    <Modal

      isOpen={isOpen}
      onAfterOpen={null}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={title}>
      <div className={className + ` relative`}>
        {setIsOpen && (
          <button onClick={() => setIsOpen(false)} transparent className={`absolute right-2 top-2`}>
            <MdClose size={20} />
          </button>
        )}
        {isLoading && ``}
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
