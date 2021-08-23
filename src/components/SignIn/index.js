import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Buttons from './../forms/Button';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignIn = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }

    }, [currentUser]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    }

    const configAuthWrapper = {
        headline: 'LogIn'
    };
    return (
        <div className="sign-in">
            <div className="sign-in-container">
                <AuthWrapper {...configAuthWrapper}>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                handleChange={e => setEmail(e.target.value)}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                handleChange={e => setPassword(e.target.value)}
                            />
                            <Buttons type="submit">
                                LogIn
                            </Buttons>
                            <div className="social-login-container">
                                <div className="form-login-row">
                                    <Buttons onClick={handleGoogleSignIn}>
                                        Sign In with google
                                    </Buttons>
                                </div>
                            </div>
                            <div className="reset-password">
                                <NavLink to="/recovery">
                                    Reset Password
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </AuthWrapper>
            </div>
        </div>
    );
};

export default SignIn;