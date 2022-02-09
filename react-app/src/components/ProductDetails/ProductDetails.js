import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../ButtonWithIcon';
import calculateOriginalPrice from '../../utils/calculateOriginalPrice';
import './ProductDetails.css';

const ProductDetails = ({ product, sessionId }) => {
  const {
    id,
    user_id: userId,
    title,
    price,
    // discount,
    stock,
    user,
  } = product;

  // currently hardcoded, cause no seed data with discount yet
  let discount = 10;
  const isCurrentUser = sessionId === userId;

  const { original, saving } = calculateOriginalPrice(price, discount);

  return (
    <div className="product-details">
      <div className="seller-details">
        <Link to={`/users/${userId}`} className={'seller-details-link'}>
          {user.username}
        </Link>
        <div>
          {/* TODO render stars for rating */}
          <span>Rating</span>
          {user.rating}
        </div>
      </div>
      <div>
        <h1 className="product-heading">{title}</h1>
      </div>
      <div className="product-price-details">
        <div className="product-price-details-top">
          <p className="price-with-discount">{`$${price}`}</p>
          {discount > 0 && (
            <span className="price-before-discount">{`$${original}`}</span>
          )}
        </div>
        <div className="product-price-details-botton">
          {discount > 0 && (
            <p className="discount">{`You save $${saving} (${discount}%)`}</p>
          )}
          {/* TODO in stock, out of stock, low stock */}
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
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
