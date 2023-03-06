import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';


const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img className="mylogo" src="./assets/mylogo.png" alt="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'> SHOP </Link>
                    <Link className="nav-link" to='/auth'> Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment >
    );
};

export default Navigation;