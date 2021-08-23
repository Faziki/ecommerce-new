import React from 'react';

import './styles.scss'

const Buttons = ({ children, ...otherprops }) => {
    return (
        <button className="btn" {...otherprops}>
            {children}
        </button>
    );
};

export default Buttons;