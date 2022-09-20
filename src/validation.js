import React from 'react';
import Ui from './ui';
import './validation.css';
import User from './Boundary/boundary'
import ErrorBoundary from './Boundary/ErrorBoundary';


const defaultFields = {
    username: '',
    password: '',
    confpass: '',
    email: '',
    tel: '',
};

const defaultErrors = {
    usernameError: '',
    passwordError: '',
    confpassError: '',
    emailError: '',
    telError: '',
};


const tagsValues = [
    {
        htmlFor: 'username',
        type: 'txet',
        name: 'username',
        placeholder: 'User Name',
        error: 'usernameError'
    },
    {
        htmlFor: 'pass',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        error: 'passwordError'
    },
    {
        htmlFor: 'confirmPass',
        type: 'password',
        name: 'confpass',
        placeholder: 'Confirm Password',
        error: 'confpassError'
    },
    {
        htmlFor: 'email',
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        error: 'emailError'
    },
    {
        htmlFor: 'phone',
        type: 'tel',
        name: 'tel',
        placeholder: 'Number',
        error: 'telError'
    }
]

class ValidationPage extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        fields: defaultFields,
        errors: defaultErrors,
      }
    };
    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState(() => ({fields: {
            ...this.state.fields,
            [name]: value
        }}));
    };
    isValid = () => {
        const { username, password, confpass, email, tel } = this.state.fields;
        let valid = false;
        const submittedErrors = {};
        // console.log(this.state.fields, 7777)
        if(username.length < 5) {
            submittedErrors.usernameError = 'user name should have more than 5 charackters';
            // this.setState(({errors}) => ({errors:{ ...errors, usernameError : 'user name should have more than 5 charackters'}}));
            // valid = false;
        };
        if (password.length < 8){
            submittedErrors.passwordError = 'password should have at least 8 charackters';
            // this.setState(({errors}) => ({errors:{...errors, passwordError: 'password should have at least 8 charackters'}}));
            // valid = false;
        };
        if(!/[0-9]/.test(password)){
            submittedErrors.passwordError = 'should contain numbers';
            // this.setState(({errors}) => ({errors:{...errors, passwordError: 'should contain numbers'}}));
            // valid = false;
        };
        if(!/[A-Z]/.test(password)){
            submittedErrors.passwordError = 'should contain capital letters';
            // this.setState(({errors}) => ({errors:{...errors, passwordError: 'should contain capital letters'}}));
            // valid = false;
        };
        if(!/[a-z]/.test(password)){
            submittedErrors.passwordError = 'should contain lower letters';
            // this.setState(({errors}) => ({errors:{...errors, passwordError: 'should contain lower letters'}}));
            // valid = false;
        };
        if(password !== confpass){
            submittedErrors.confpassError = 'passwords dont match!';
            // this.setState(({errors}) => ({errors:{...errors, confpassError: 'passwords dont match!'}}));
            // valid = false;
        };
        if(!email.includes('@')){
            submittedErrors.emailError = 'not an email';
            // this.setState(({errors}) => ({errors:{...errors, emailError: 'not an email'}}));
            // valid = false;
        };
        if(isNaN(tel) || tel === ''){
            submittedErrors.telError = 'this input must be number';
            // this.setState(({errors}) => ({errors:{...errors, telError: 'this input must be number'}}));
            // valid = false;
        };
        this.setState(({errors}) => ({errors: {...errors, ...submittedErrors}}));
        const errorsLength = Object.keys(submittedErrors).length;
        if( errorsLength === 0 ) {
            valid = true;
        }
        return valid;
    };
    alertBtn = () => {
        const { username, password, confpass, email, tel } = this.state.fields;
        if(this.isValid()){
            alert(`User Name is -->  ${username}
            \nPassword is --> ${password}
            \nConfirmed Password is --> ${confpass}
            \nEmail is --> ${email}
            \nTelephone number is --> ${tel}`);
            this.setState(() => ({fields: defaultFields}));
            this.setState(() => ({errors: defaultErrors}));
        }
    };
    handleSubmit(event) {
        event.preventDefault();
    };
    resetBtn = () => {
        this.setState(() => ({fields: defaultFields}));
        this.setState(() => ({errors: defaultErrors}));
    };
    render() {
        return <>
            <div className='signupForm'>
            <form className='form' onSubmit={this.handleSubmit}>
                <h2 className='title'> Sign Up </h2>
                {
                  tagsValues.map((tagValue) => {
                    return <Ui states={this.state} {...tagValue} onChange={this.handleInputChange}/>
                  })
                }
                <br/>
                <br/>
                <div>
                <ErrorBoundary>
                    <User username={this.state.fields.username}/>
                </ErrorBoundary>
                </div>
                <div className='btnClass'>
                  <button className='submitBtn' onClick={this.alertBtn}>
                     Submit
                  </button>
                  <button className='submitBtnReset' onClick={this.resetBtn}>
                     Reset
                  </button>
                </div>
             </form>
            </div>
        </>
    }
}
export default ValidationPage;