import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const history = useHistory()

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

    const categoryAClick = () => {

        history.push(`/category/${categoryA}`)

    }

    const categoryBClick = () => {

        history.push(`/category/${categoryB}`)

    }

    const categoryCClick = () => {

        history.push(`/category/${categoryC}`)

    }

    const categoryDClick = () => {

        history.push(`/category/${categoryD}`)

    }


    const saleClick = () => {

        history.push(`/category/sale`)

    }







    return (
        <div>
            <div className="category-container">
                <div className="welcome-container">
                    {sessionMessage}
                </div>
                <div className="category-list">
                    <ul className="category-list">
                        <div className="category-list-item" onClick={categoryAClick}>
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg" alt="keyboardSwitchCategoryImage" />
                            <li><NavLink to={`/category/${categoryA}`}>Switches</NavLink></li>
                        </div>
                        <div className="category-list-item" onClick={categoryBClick}>
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt-chalk-keycaps-1.jpeg" alt="keycapsCategoryImage" />
                            <li><NavLink to={`/category/${categoryB}`}>Keycaps</NavLink></li>
                        </div>
                        <div className="category-list-item" onClick={categoryCClick}>
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-4.jpeg" alt="keyboardCategoryImage" />
                            <li><NavLink to={`/category/${categoryC}`}>Keyboards</NavLink></li>
                        </div>
                        <div className="category-list-item" onClick={categoryDClick}>
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-diy-kit-2.jpeg" alt="DIYkitsCategoryImage" />
                            <li><NavLink to={`/category/${categoryD}`}>DIY kits</NavLink></li>
                        </div>
                        <div className="category-list-item" onClick={saleClick}>
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg" alt="saleCategoryImage" />
                            <li><NavLink to={`/category/sale`}>Sale</NavLink></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;