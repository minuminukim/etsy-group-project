import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-container error-page">
      <h1 className="error-heading">Uh oh!</h1>
      <h2 className="error-caption">
        Sorry, the page you were looking for was not found.
      </h2>
      <Link className="error-redirect" to="/">
        Go back to Qwerty
      </Link>
    </div>
  );
};

export default PageNotFound;
