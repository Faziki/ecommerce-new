import React, { Component } from 'react';

import SignUp from '../../components/SignUp';

import './styles.scss'

class registration extends Component {
    render() {
        return (
            <div className="registration">
                <SignUp />
            </div>
        )
    }
}

export default registration;
