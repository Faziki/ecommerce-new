import React from 'react';
import './styles.scss';

const AuthWrapper = ({ headline, children }) => {
    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                {headline && <h2>{headline}</h2>}
                <div className="auth-children">
                    {children && children}
                </div>
            </div>
        </div>
    );
}

export default AuthWrapper;