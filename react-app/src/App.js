import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProductListingForm from './components/ProductListingForm';
import ProductImageForm from './components/ProductImageForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import ProductListing from './components/ProductListing';
import PageNotFound from './components/PageNotFound';
import ReviewForm from './components/ReviewForm/ReviewForm';
import Reviews from './components/Reviews/Reviews';
import { authenticate } from './store/session';
import SearchResult from './components/Search/SearchResult';
import CategoryView from './components/Categories';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

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
          <LandingPage />
          <LoginForm />
        </Route>
        <Route path="/category/:category" exact={true}>
          <CategoryView />
        </Route>
        <Route path="/search" exact={true}>
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
        <Route exact path="/products/:productId">
          <ProductListing sessionId={sessionUser?.id} />
          <ReviewForm />
          <Reviews />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
