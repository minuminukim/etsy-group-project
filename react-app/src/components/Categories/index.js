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
            <div><NavLink to={`/products/${products[2]?.id}`}>
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
                ${products[2]?.price}
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
                ${products[4]?.price}
              </div>
            </NavLink></div>
            <div><NavLink to={`/products/${products[6]?.id}`}>
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
                ${products[6]?.price}
              </div>
            </NavLink></div>
            <div><NavLink to={`/products/${products[8]?.id}`}>
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
                ${products[8]?.price}
              </div>
            </NavLink></div>
            <div><NavLink to={`/products/${products[10]?.id}`}>
              <li className="header-images">
                  <img className="header-pic" src={products[10]?.images[0]} />
              </li>
              <div className="category-product-price">
                ${products[10]?.price}
              </div>
            </NavLink></div>
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
