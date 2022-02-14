import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../ProductGrid';
import UserDetails from './UserDetails';
import './UserProfile.css';

const UserProfile = () => {
  const { userId } = useParams();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(`/api/users/${userId}`);
      // waits until the request completes...
      const data = await response.json();
      setUser(data);
      setProducts(data.products);
      setIsLoaded(true);
    }

    fetchUserData();
  }, [userId]);

  return (
    isLoaded && (
      <div className="page-container user-page">
        <div className="user-page-top">
          <UserDetails
            username={user.username}
            profilePhoto={user.profile_pic_url}
            bio={user.bio}
          />
        </div>
        <div className="user-page-main">
          <h2 className="user-page-header">All Items</h2>
          <ProductGrid products={products} />
        </div>
      </div>
    )
  );
};

export default UserProfile;
