import './button.styles.scss';

// 3 TYPES OF BUTTONS:
/*
    default

    inverted

    google sign-in
*/

const BUTTON_TYPE_CLASSES = {
    inverted: 'inverted',
    google: 'google-sign-in',
};

const Button = ({children, buttonType, ...otherProps}) => {

    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;