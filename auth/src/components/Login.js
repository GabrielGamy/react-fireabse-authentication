import PropTypes from 'prop-types';
import AppLogo from './AppLogo';
import SignInOptions from './SigInOptions';
import style from './style';

const LoginPage = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            {props.title && <h1>{props.title}</h1>}
            <div style={style.box}>
                <div style={style.boxContainer}>
                    <div style={style.boxHeader}>
                        {props.appLogo && <img src={props.appLogo} alt="Application logo" />}
                        {!props.appLogo && <AppLogo />}
                        <span>{props.appName}</span>
                    </div>
                    <h2 style={style.h2}>{props.signInText}</h2>
                    <input style={style.input} type={'email'} placeholder={props.labels.email} aria-label={props.labels.email} />
                    <input style={style.input} type={'password'} placeholder={props.labels.password} aria-label={props.labels.password} />
                    <div style={{ textAlign: 'left', marginBottom: 20 }}>
                        <span>{props.noAccountText} </span>
                        <button style={style.buttonLink} onClick={props.onCreateAccountBtnClick}>{props.createAccountText}</button>
                    </div>
                    <div style={style.boxFooter}>
                        <button style={style.button}>{props.submitText}</button>
                    </div>
                </div>
            </div>
            <SignInOptions otherOptionsText={props.otherOptionsText} />
        </div>
    )
}

LoginPage.defaultProps = {
    signInText: "Sign In",
    noAccountText: 'No Account?',
    otherOptionsText: 'Other Sign-in options',
    createAccountText: 'Create a new account',
    submitText: 'Submit',
    labels: {
        email: 'Enter you email',
        password: 'Password',
    },
    onCreateAccountBtnClick: () => {
        alert('You must implement this action!')
    }
};

LoginPage.propTypes = {
    title: PropTypes.string,
    appName: PropTypes.string.isRequired,
    appLogo: PropTypes.string,
    signInText: PropTypes.string,
    noAccountText: PropTypes.string,
    otherOptionsText: PropTypes.string,
    createAccountText: PropTypes.string,
    submitText: PropTypes.string,
    labels: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
    }),
    onCreateAccountBtnClick: PropTypes.func
}
export default LoginPage;