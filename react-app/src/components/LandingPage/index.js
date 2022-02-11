import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import { useSelector } from 'react-redux';

const LandingPage = () => {

    const categoryA = "switches"
    const categoryB = "keycaps"
    const categoryC = "keyboards"
    const categoryD = "diy_kits"
    const categoryE = "sale"
    const sessionUser = useSelector(state => state.session.user);

    let sessionMessage;
    if (sessionUser) {
      sessionMessage = (
        <p>Welcome back, <NavLink to={`/users/${sessionUser.id}`} className="user-link">{sessionUser.username}</NavLink>!</p>
      );
    } else {
      sessionMessage = (
        <p>Find extra-special ways to express your keyboard.</p>
      );
    }

    return (
        <div>
            <div className="category-container">
                <div className="welcome-container">
                    {sessionMessage}
                </div>
                <div className="category-list">
                    <ul className="category-list">
                        <div className="category-list-item">
                            <NavLink to={`/category/${categoryA}`}><img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg"/></NavLink>
                            <li><NavLink to={`/category/${categoryA}`}>Switches</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <NavLink to={`/category/${categoryB}`}><img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt-chalk-keycaps-1.jpeg"/></NavLink>
                            <li><NavLink to={`/category/${categoryB}`}>Keycaps</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <NavLink to={`/category/${categoryC}`}><img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-4.jpeg"/></NavLink>
                            <li><NavLink to={`/category/${categoryC}`}>Keyboards</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <NavLink to={`/category/${categoryD}`}><img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-diy-kit-2.jpeg"/></NavLink>
                            <li><NavLink to={`/category/${categoryD}`}>DIY kits</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <NavLink to={`/category/sale`}><img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg"/></NavLink>
                            <li><NavLink to={`/category/sale`}>Sale</NavLink></li>
                        </div>
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default LandingPage;