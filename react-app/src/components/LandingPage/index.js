import { NavLink } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {

    const categoryA = "switches"
    const categoryB = "keycaps"
    const categoryC = "keyboards"
    const categoryD = "diy_kits"
    const categoryE = "sale"

    return (
        <div>
            <div className="category-container">
                <div className="welcome-container">
                    <p>Find extra-special ways to express your keyboard.</p>
                </div>
                <div className="category-list">
                    <ul className="category-list">
                        <div className="category-list-item">
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg"/>
                            <li><NavLink to={`/category/${categoryA}`}>Switches</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt-chalk-keycaps-1.jpeg"/>
                            <li><NavLink to={`/category/${categoryB}`}>Keycaps</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-4.jpeg"/>
                            <li><NavLink to={`/category/${categoryC}`}>Keyboards</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-diy-kit-2.jpeg"/>
                            <li><NavLink to={`/category/${categoryD}`}>DIY kits</NavLink></li>
                        </div>
                        <div className="category-list-item">
                            <img className="category-image" src="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg"/>
                            <li><NavLink to={`/category/sale`}>Sale</NavLink></li>
                        </div>
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default LandingPage;