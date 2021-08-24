import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles.scss'
import { checkUserIsAdmin } from '../../Utils'
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const AdminToolbar = (props) => {
    const { currentUser } = useSelector(mapStateToProps);

    const isAdmin = checkUserIsAdmin(currentUser);
    if (!isAdmin) {
        return null;
    }
    
    return (
        <div className="AdminToolbar">
            <NavLink className='admin-link' to="/admin">
                <button className='admin-button' >
                    Admin
                </button>
            </NavLink>
        </div>
    )
}


export default AdminToolbar;