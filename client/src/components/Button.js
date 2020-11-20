import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

// saved css button styles into var STYLES array
const STYLES = ['btn--primary','btn--outline'];
// saved css button SIZES into var STYLES array
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize
}) => {
    //check if button has a style attached. If so run buttonstyle if not apply defeault STYLES
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className="btn-mobile">
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>


        </Link>
    )
}

