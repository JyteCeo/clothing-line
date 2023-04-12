import { Fragment , useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../../context/context.component";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import './navigation.styles.scss';
import Counter from "../../../test folder/test.components";



const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img className="mylogo" src="./assets/mylogo.png" alt="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'> SHOP </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}> SIGN OUT </span>
                    ) : (
                    <Link className="nav-link" to='/auth'> Sign In</Link>
                    )}
                </div>
            </div>
            <Counter />

            <Outlet />
        </Fragment >
    );
};

export default Navigation;