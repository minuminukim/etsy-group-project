import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TwoRowGallery from './TwoRowGallery';
import { getAllProducts } from '../../store/productReducer';
import sortByRating from '../../utils/sortByRating';
import './LandingPage.css';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const productsObject = useSelector((state) => state.products);
  const allProducts = Object.values(productsObject);
  const sorted = sortByRating(allProducts);

  useEffect(() => {
    return dispatch(getAllProducts())
      .then(() => setIsLoading(false))
      .catch((response) => response);
  }, [dispatch]);

  const categoryA = 'switches';
  const categoryB = 'keycaps';
  const categoryC = 'keyboards';
  const categoryD = 'diy_kits';
  const sessionUser = useSelector((state) => state.session.user);

  let sessionMessage;
  if (sessionUser) {
    sessionMessage = (
      <p>
        Welcome back,{' '}
        <NavLink to={`/users/${sessionUser.id}`} className="user-link">
          {sessionUser.username}
        </NavLink>
        !
      </p>
    );
  } else {
    sessionMessage = <p>Find extra-special ways to express your keyboard.</p>;
  }

  const categoryAClick = () => {
    history.push(`/category/${categoryA}`);
  };

  const categoryBClick = () => {
    history.push(`/category/${categoryB}`);
  };

  const categoryCClick = () => {
    history.push(`/category/${categoryC}`);
  };

  const categoryDClick = () => {
    history.push(`/category/${categoryD}`);
  };

  const saleClick = () => {
    history.push(`/category/sale`);
  };

  return (
    <div className="page-container">
      <div className="category-container">
        <div className="welcome-container">{sessionMessage}</div>
        <div className="category-list">
          <ul className="category-list">
            <div className="category-list-item" onClick={categoryAClick}>
              <img
                className="category-image"
                src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg"
                alt="keyboardSwitchCategoryImage"
              />
              <li className="landing-page-links">
                <NavLink to={`/category/${categoryA}`}>Switches</NavLink>
              </li>
            </div>
            <div className="category-list-item" onClick={categoryBClick}>
              <img
                className="category-image"
                src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt-chalk-keycaps-1.jpeg"
                alt="keycapsCategoryImage"
              />
              <li className="landing-page-links">
                <NavLink to={`/category/${categoryB}`}>Keycaps</NavLink>
              </li>
            </div>
            <div className="category-list-item" onClick={categoryCClick}>
              <img
                className="category-image"
                src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-4.jpeg"
                alt="keyboardCategoryImage"
              />
              <li className="landing-page-links">
                <NavLink to={`/category/${categoryC}`}>Keyboards</NavLink>
              </li>
            </div>
            <div className="category-list-item" onClick={categoryDClick}>
              <img
                className="category-image"
                src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-diy-kit-2.jpeg"
                alt="DIYkitsCategoryImage"
              />
              <li className="landing-page-links">
                <NavLink to={`/category/${categoryD}`}>DIY kits</NavLink>
              </li>
            </div>
            <div className="category-list-item" onClick={saleClick}>
              <img
                className="category-image"
                src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg"
                alt="saleCategoryImage"
              />
              <li className="landing-page-links">
                <NavLink to={`/category/sale`}>Sale</NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="landing-page-main-container">
        <TwoRowGallery products={sorted} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default LandingPage;
