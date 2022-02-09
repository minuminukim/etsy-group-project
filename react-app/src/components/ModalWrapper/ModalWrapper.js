import { useState } from 'react';
import Modal from './Modal';
import Button from '../common/Button';

const ModalWrapper = ({ children, buttonLabel, buttonClassName }) => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => setShowModal(true);
  const onClose = () => setShowModal(false);

  return (
    <>
      <Button
        label={buttonLabel}
        className={buttonClassName}
        onClick={onClick}
      />
      {showModal && <Modal onClose={onClose}>{children}</Modal>}
    </>
  );
};

export default ModalWrapper;
