import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from './components/auth/SignUpForm';
import ProductListingForm from './components/ProductListingForm';
import ProductImageForm from './components/ProductImageForm';
import ProductListingEdit from './components/ProductListingEdit';
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
import DeleteWarning from './components/DeleteWarning';
import NavBar from './components/NavBar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { get_cart_items } from './store/shoppingCart';
import SignInRequiredForCart from './components/ShoppingCart/signInRequiredForCart';

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
        </Route>
        <Route path='/mycart' exact={true} >
          {sessionUser ? <ShoppingCart /> : <SignInRequiredForCart />}

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
        <Route exact path="/products/:productId/edit">
          <ProductListingEdit sessionUser={sessionUser} />
        </Route>
        <Route exact path="/products/:productId/images/new">
          <ProductImageForm sessionUser={sessionUser} />
        </Route>
        <Route exact path="/products/:productId">
          <ProductListing sessionId={sessionUser?.id} />
          <ReviewForm />
          <Reviews />
        </Route>
        <Route exact path="/testing">
          <DeleteWarning />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch >
    </BrowserRouter >
  );
}

export default App;
