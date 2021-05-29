import React from 'react';
import FormInputComponent from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignInComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChange = e => {
        const {value, name } = e.target;

        this.setState({ [name]: value});
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInputComponent name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign in with Google </CustomButton>
                </form>
            </div>
        );
    }
};

export default SignInComponent;