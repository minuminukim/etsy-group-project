import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import OutOfStock from './OutOfStock';
import InStock from './InStock';
import ButtonWithIcon from '../ButtonWithIcon';
import Modal from '../ModalWrapper/Modal.js';
import DeleteWarning from '../DeleteWarning';
import calculateOriginalPrice from '../../utils/calculateOriginalPrice';
import { deleteProduct } from '../../store/productReducer';
import './ProductDetails.css';

const ProductDetails = ({ product, sessionId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const { id, user_id: userId, title, price, discount, stock, user } = product;

  const isCurrentUser = sessionId === userId;

  const { original, saving } = calculateOriginalPrice(price, discount);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return dispatch(deleteProduct(id))
      .then(() => history.push('/'))
      .catch(async (res) => {
        const data = await res.json();
        return data;
      });
  };

  return (
    <div className="product-details">
      <div className="seller-details">
        <Link to={`/users/${userId}`} className={'seller-details-link'}>
          {user.username}
        </Link>
      </div>
      <div>
        <h1 className="product-heading">{title}</h1>
      </div>
      <div className="product-price-details">
        <div className="product-price-details-top">
          <div className="product-price-details-top-left">
            <p className="price-with-discount">{`$${price}`}</p>
            {discount > 0 && (
              <span className="price-before-discount-details">{`$${original}`}</span>
            )}
          </div>
          <div className="product-price-details-top-right">
            {stock ? <InStock /> : <OutOfStock />}
          </div>
        </div>
        <div className="product-price-details-bottom">
          {discount > 0 && (
            <p className="discount">{`You save $${saving} (${discount}%)`}</p>
          )}
        </div>
        {isCurrentUser && (
          <div className="product-details-btns">
            <Link to={`/products/${id}/edit`}>
              <ButtonWithIcon
                className="edit-btn"
                size="medium"
                action="edit"
                shape="square"
              />
            </Link>
            <ButtonWithIcon
              className="delete-btn"
              size="medium"
              action="delete"
              shape="square"
              onClick={openModal}
            />
            {showModal && (
              <Modal onClose={closeModal}>
                <DeleteWarning
                  cancelOnClick={closeModal}
                  deleteOnClick={handleDelete}
                />
              </Modal>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
