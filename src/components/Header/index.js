import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.actions';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg'
import { auth } from '../../firebase/utils'
const mapState = ({ user }) => ({
    currentUser: user.currentUser
});
const Header = (props) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    const signOut = () => {
        dispatch(signOutUserStart());
    };

    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <NavLink to='/'>
                        <img src={Logo} alt="Ecommerce logo" draggable="false" />
                    </NavLink>
                </div>
                <div className="nav">
                    {currentUser && (
                        <div>
                            <NavLink className='nav-links' to="/dashboard">My Account</NavLink>
                            <NavLink className='nav-links' to='#' type="button" onClick={() => signOut()} >Logout</NavLink>
                        </div>
                    )}
                    {!currentUser && (
                        <div>
                            <NavLink className='nav-links' to="/registration">Register</NavLink>
                            <NavLink className='nav-links' to="/login">Login</NavLink>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}

Header.defaultProps = {
    currentUser: null
}

export default Header;