import { NavLink } from "react-router-dom";

const LandingPage = () => {

    const categoryA = "switches"

    return (
        <div>
            <h1>Landing Page</h1>
            <NavLink to={`/category/${categoryA}`}>{categoryA}</NavLink>
        </div>
    )
}

export default LandingPage;