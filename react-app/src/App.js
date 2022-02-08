import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProductListingForm from './components/ProductListingForm';
import ProductImageForm from './components/ProductImageForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import CreateReview from './components/ReviewForm/Review';
import { authenticate } from './store/session';
import SearchResult from './components/SearchResult';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <h1>Landing Page</h1>
          <LoginForm />
        </Route>
        <Route path='/search' >
          <SearchResult />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route exact path="/products/new">
          <ProductListingForm sessionUser={sessionUser} />
        </Route>
        <Route exact path="/products/:productId/images/new">
          <ProductImageForm sessionUser={sessionUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
