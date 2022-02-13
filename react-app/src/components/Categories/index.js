import React, { useEffect, useState } from 'react';
import ProductGrid from '../ProductGrid';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Categories.css';
import '../ButtonWithIcon/ButtonWithIcon.css';

const CategoryView = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/category/${category}`);
      const responseData = await response.json();
      setProducts(responseData.products);
    }
    fetchData();
  }, []);

  const productComponents = products.map((product) => {
    return (
      <li key={product.id}>
        <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
        <p>{product.images[0]}</p>
        <p>{products[0].images[0]}</p>
      </li>
    );
  });

  const CategoryTitle = category.split('_').join(' ');

  return (
    <div>
      <div className="category-header">
        <div className="header-elements">
          <ul className="header-elements-container">
            <div>
              <li className="header-images">
                <NavLink to={`/products/${products[0]?.id}`}>
                  <img
                    className="header-pic"
                    src={products[0]?.images[0]}
                    alt="switches"
                  />
                </NavLink>
              </li>
              <div className="category-product-price">
                ${products[0]?.price}
              </div>
            </div>
            <div>
              <li className="header-images">
                <NavLink to={`/products/${products[1]?.id}`}>
                  <img
                    className="header-pic"
                    src={products[1]?.images[0]}
                    alt="keycaps"
                  />
                </NavLink>
              </li>
              <div className="category-product-price">
                ${products[1]?.price}
              </div>
            </div>
            <div>
              <li className="header-images">
                <NavLink to={`/products/${products[2]?.id}`}>
                  <img
                    className="header-pic"
                    src={products[2]?.images[0]}
                    alt="keyboards"
                  />
                </NavLink>
              </li>
              <div className="category-product-price">
                ${products[2]?.price}
              </div>
            </div>
            <div>
              <li className="header-images">
                <NavLink to={`/products/${products[3]?.id}`}>
                  <img
                    className="header-pic"
                    src={products[3]?.images[0]}
                    alt="DIY kits"
                  />
                </NavLink>
              </li>
              <div className="category-product-price">
                ${products[3]?.price}
              </div>
            </div>
            <div>
              <li className="header-images">
                <NavLink to={`/products/${products[4]?.id}`}>
                  <img className="header-pic" src={products[4]?.images[0]} />
                </NavLink>
              </li>
              <div className="category-product-price">
                ${products[4]?.price}
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="category-content-header">
        <div className="content-container">
          <p className="by-interest">SHOP BY INTEREST</p>
          <p className="category-capitalize">{CategoryTitle}</p>
          <p className="category-explore">
            Explore extra-special ways to express your keyboard.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CategoryView;
