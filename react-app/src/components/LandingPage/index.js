import { NavLink } from "react-router-dom";

const LandingPage = () => {

    const categoryA = "switches"
    const categoryB = "keycaps"
    const categoryC = "keyboards"
    const categoryD = "diy_kits"
    const categoryE = "sale"

    return (
        <div>
            <h1>Landing Page</h1>
            <ul>
                <li><NavLink to={`/category/${categoryA}`}>{categoryA}</NavLink></li>
                <li><NavLink to={`/category/${categoryB}`}>{categoryB}</NavLink></li>
                <li><NavLink to={`/category/${categoryC}`}>{categoryC}</NavLink></li>
                <li><NavLink to={`/category/${categoryD}`}>{categoryD}</NavLink></li>
                <li><NavLink to={`/category/sale`}>{categoryE}</NavLink></li>
            </ul> 
        </div>
    )
}

export default LandingPage;