import LoaderOverlay from './LoaderOverlay';
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
    overflow: `unset`,
    padding: `20px 0`,
    borderRadius: `20px`
  },
  overlay: {
    background: `rgba(33, 37, 41, 0.5)`
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
          <button onClick={() => setIsOpen(false)} transparent className={`px-6`}>
            <MdClose />
          </button>
        )}
        {isLoading && <LoaderOverlay />}
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
