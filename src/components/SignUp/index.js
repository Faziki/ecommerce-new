import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { signUpUserStart } from '../../redux/user/user.actions';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Buttons from './../forms/Button';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
});

const Signup = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser, userErr } = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (currentUser) {
            reset();
            history.push('/');
        }

    }, [currentUser]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }

    }, [userErr]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
    }

    const configAuthWrapper = {
        headline: 'Sign Up'
    };
    return (
        <div className="sign-up">
            <div className="sign-up-container">
                <AuthWrapper {...configAuthWrapper}>
                    {errors.length > 0 &&
                        <div className="form-input-error">
                            {errors.map((err, index) => {
                                return <p key={index}>{err}</p>
                            }
                            )}
                        </div>
                    }
                    <div className="form-container">
                        <form onSubmit={handleFormSubmit}>
                            <FormInput
                                type="text"
                                name="displayName"
                                value={displayName}
                                placeholder="Full Name"
                                handleChange={e => setDisplayName(e.target.value)}
                            />
                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="E-mail"
                                handleChange={e => setEmail(e.target.value)}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                handleChange={e => setPassword(e.target.value)}
                            />
                            <FormInput
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                handleChange={e => setConfirmPassword(e.target.value)}
                            />
                            <Buttons type="submit">
                                Register
                            </Buttons>
                        </form>
                        <div className="links">
                            <NavLink to="/login">
                                LogIn
                            </NavLink>
                            {` | `}
                            <NavLink to="/recovery">
                                Reset Password
                            </NavLink>
                        </div>
                    </div>
                </AuthWrapper>
            </div>
        </div >
    )

}

export default Signup;