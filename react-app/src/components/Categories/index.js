import React, { useEffect, useState } from 'react';
import ProductGrid from '../ProductGrid';
import ProductGridBlock from '../ProductCard';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./Categories.css";

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

  return (
    <div>
      <div className="category-header">
        <div className="header-elements">
          <ul className="header-elements-container">
            <li className="header-images"><img className="header-pic" src={products[0]?.images[0]}/></li>
            <li className="header-images"><img className="header-pic" src={products[1]?.images[0]}/></li>
            <li className="header-images"><img className="header-pic" src={products[2]?.images[0]}/></li>
            <li className="header-images"><img className="header-pic" src={products[3]?.images[0]}/></li>
            <li className="header-images"><img className="header-pic" src={products[4]?.images[0]}/></li>
          </ul>
        </div>
      </div>
      <h2>Shop by interest</h2>
      <p>{category}</p>
      <div>{productComponents}</div>
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryView;
