import { createPortal } from 'react-dom';
import { useModal } from '../../context/Modal';
import './Modal.css';

const Modal = ({ onClose, children }) => {
  const modalNode = useModal();

  return modalNode
    ? createPortal(
        <div className="modal">
          <div className="modal-background" onClick={onClose} />
          <div className="modal-content">{children}</div>
        </div>,
        modalNode
      )
    : null;
};

export default Modal;
