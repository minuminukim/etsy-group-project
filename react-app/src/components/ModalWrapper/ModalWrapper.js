import { useState } from 'react';
import Modal from './Modal';
import Button from '../common/Button';

const ModalWrapper = ({ children, buttonLabel, buttonClassName }) => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => setShowModal(true);
  const onClose = () => setShowModal(false);
  // TODO: figure out way to allow this 2b more usable:
  // maybe, pass in Trigger component as prop, set onClick on that?
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
